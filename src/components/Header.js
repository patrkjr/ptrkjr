import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

import { Layouts, Colors, FontStyles } from '../../constants/Styles';
import IconButton from './IconButton';

import {LocalizationContext} from '../navigation/Routes';

const Header = ({ scene }) => {
  const { locale, setLocale } = useContext(LocalizationContext);
  const { options } = scene.descriptor;
  const { headerStyle } = options;
  return <View style={[headerStyle, styles.container]}>
    <View style={styles.headerLeft}>
      <Link
        style={styles.linkButton}
        to='tel:+45 42 33 12 33'
        accessibilityRole="link"
      >
        <IconButton name={'phone'} color={Colors.primary} size={30}/>
      </Link>
      <Link
        to='mailto:patrick.jessen@icloud.com'
        accessibilityRole="link"
      >
        <IconButton name={'mail'} color={Colors.primary} size={30}/>
      </Link>
    </View>
    <View style={styles.headerRight}>
      {
        //Theme changer goes here
        //<IconButton name={'moon'} color={Colors.primary} size={30}/>
      }
      <TouchableOpacity
        onPress={() => {
          setLocale(locale == 'da-dk' ? 'en-GB' : 'da-dk')
        }}
      >
        <Text style={[FontStyles.h5, styles.locale]}>
        {
          locale.substring(0,2).toUpperCase()
        }
        </Text>
      </TouchableOpacity>
    </View>
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
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locale: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: Layouts.borderRadius,
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: 10,
  },
  linkButton: {
    marginRight: Layouts.mediumSpacing
  }
})

export default Header;
