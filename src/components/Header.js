import React, { useEffect, useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../navigation/Routes';

import { Layouts, Colors, FontStyles, DefaultTheme, DarkTheme } from '../../constants/Styles';
import Link from './Link';
import IconButton from './IconButton';
import { Feather } from '@expo/vector-icons';
import Logo from './Logo';

import {LocalizationContext} from '../navigation/Routes';

const Header = ({ scene, ...otherProps }) => {
  const { locale, setLocale } = useContext(LocalizationContext);
  const { dark, colors } = useTheme();
  const { options } = scene.descriptor;
  const { name } = scene.route;
  const { headerStyle } = options;
  const hoverColor = ( name == 'Home' && !dark ) ? 'white' : colors.primary

  const { scheme, setScheme } = useContext(ThemeContext);

  const handleOnChangeTheme = () => {
    setScheme(scheme == 'light' ? 'dark' : 'light');
  }
  return <View style={[headerStyle, styles.container]}>
    <View style={styles.headerLeft}>
    <Link to="/">
      <Logo/>
    </Link>
    </View>
    <View style={{ flexDirection: 'row'}}>
      <Link style={[FontStyles.h5, styles.navItem, name == 'Home' && styles.current]} hoverStyle={{ color: colors.text }} to="/">Home</Link>
      <Link style={[FontStyles.h5, styles.navItem, name == 'Projects' && styles.current]} hoverStyle={{ color: colors.text }} to="/projects">Projects</Link>
    </View>
    <View style={styles.headerRight}>
      <Link
        style={styles.iconButton}
        to='tel:+45 42 33 12 33'
        accessibilityRole="link"
      >
        <IconButton name={'phone'} color={colors.text} size={30}/>
      </Link>
      <Link
        to='mailto:patrick.jessen@icloud.com'
        accessibilityRole="link"
      >
        <IconButton name={'mail'} color={colors.text} size={30}/>
      </Link>
    </View>
  </View>
}

// <TouchableOpacity
//   style={styles.locale}
//   onPress={() => {
//     setLocale(locale == 'da-dk' ? 'en-GB' : 'da-dk')
//   }}
// >
//   <Feather name={'globe'} size={30} color={colors.text}/>
//   <Text style={[FontStyles.h5, { color: colors.text, marginLeft: Layouts.smallSpacing * 2 }]}>
//   {
//     locale.substring(0,2).toUpperCase()
//   }
//   </Text>
// </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 10,
    minWidth: 340,
    paddingHorizontal: Layouts.largeSpacing,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locale: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: Colors.white,
    borderColor: Colors.lightGrey,
    borderRadius: Layouts.mediumRadius,
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: 10,
  },
  iconButton: {
    marginRight: Layouts.mediumSpacing
  },
  navItem: {
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: 10,
    borderRadius: Layouts.smallRadius
  },
  current: {
    backgroundColor: 'rgba(0,0,0,.12)'
  }
})

export default Header;
