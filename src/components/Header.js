import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { Link } from '@react-navigation/native';

import { Layouts, Colors, FontStyles } from '../../constants/Styles';
import IconButton from './IconButton';

const Header = ({ scene }) => {
  const { options } = scene.descriptor;
  const { headerStyle } = options;
  return <View style={[headerStyle, styles.container]}>
    <Text style={[FontStyles.h5, {color: Colors.primary, fontFamily: 'Inter_900Black', fontStyle: 'italic'}]}>
      PTRKJR
    </Text>
    <Link
      to='mailto:patrick.jessen@icloud.com'
      accessibilityRole="link"
    >
      <IconButton name={'mail'} color={Colors.primary} size={30}/>
    </Link>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: Layouts.largeSpacing,
    justifyContent: 'space-between',
    position: 'fixed',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    ...Layouts.mediumShadow
  }
})

export default Header;
