import React, { useEffect, useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useTheme } from '@react-navigation/native';
import { ThemeContext } from '../navigation/Routes';

import { Layouts, Colors, FontStyles, DefaultTheme, DarkTheme } from '../../constants/Styles';
import IconButton from './IconButton';

import {LocalizationContext} from '../navigation/Routes';

const Header = ({ scene, ...otherProps }) => {
  const { locale, setLocale } = useContext(LocalizationContext);
  const { dark, colors } = useTheme();
  const { options } = scene.descriptor;
  const { headerStyle } = options;

  const { scheme, setScheme } = useContext(ThemeContext);

  const handleOnChangeTheme = () => {
    setScheme(scheme == 'light' ? 'dark' : 'light');
  }
  return <View style={[headerStyle, styles.container]}>
    <View style={styles.headerLeft}>
      <Link
        style={styles.iconButton}
        to='tel:+45 42 33 12 33'
        accessibilityRole="link"
      >
        <IconButton name={'phone'} color={Colors.white} size={30}/>
      </Link>
      <Link
        to='mailto:patrick.jessen@icloud.com'
        accessibilityRole="link"
      >
        <IconButton name={'mail'} color={Colors.white} size={30}/>
      </Link>
    </View>
    <View style={styles.headerRight}>
      <IconButton style={styles.iconButton} name={ dark ? 'sun' : 'moon'} color={Colors.white} size={30}
        onPress={handleOnChangeTheme}
      />
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
    backgroundColor: 'transparent',
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
    color: Colors.white,
    borderColor: Colors.lightGrey,
    borderRadius: Layouts.borderRadius,
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: 10,
  },
  iconButton: {
    marginRight: Layouts.mediumSpacing
  }
})

export default Header;
