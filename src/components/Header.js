import React, { useEffect, useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../navigation/Routes';
import DATA from '../../public/data';

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
  return <ImageBackground imageStyle={{ flex: 1, backgroundColor: colors.background, opacity: 0.65, minHeight: '100%'}} style={[headerStyle, styles.container]}>
    <View style={styles.headerLeft}>
    <Link to="/">
      <Logo color={colors.text}/>
    </Link>
    </View>
    <View style={styles.headerRight}>
      <Link style={[ styles.navItem, name == 'Home' && styles.current]} hoverStyle={{ color: colors.text, opacity: 1 }} to="/">Home</Link>
      <Link style={[ styles.navItem, name == 'Projects' && styles.current]} hoverStyle={{ color: colors.text, opacity: 1}} to="/projects">Projects</Link>
      <Link
        style={styles.iconButton}
        to='tel:+45 42 33 12 33'
        accessibilityRole="link"
      >
        <IconButton name={'phone'} color={colors.text} size={26}/>
      </Link>
      <Link
        to='mailto:patrick.jessen@icloud.com'
        accessibilityRole="link"
      >
        <IconButton name={'mail'} color={colors.text} size={26}/>
      </Link>
    </View>
  </ImageBackground>
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
    paddingHorizontal: Layouts.mediumSpacing,
    marginRight: Layouts.mediumSpacing
  },
  navItem: {
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: 12,
    marginRight: Layouts.mediumSpacing,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    opacity: 0.8,
    borderRadius: Layouts.smallRadius
  },
  current: {
    backgroundColor: 'rgba(0,0,0,.18)',
    opacity: 1,
  }
})

export default Header;
