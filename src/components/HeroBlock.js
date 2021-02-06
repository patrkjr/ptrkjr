import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Layouts, FontStyles } from '../../constants/Styles';
import Link from './Link';

const HeroBlock = ({ title, release, font, themes, linkTo = "", containerStyle }) => {
  const { dark, colors } = useTheme();
  const theme = dark ? themes.darkTheme : themes.defaultTheme;
  const [isHovered, setIsHovered] = useState();
  return(
    <View style={[styles.hero, {backgroundColor: theme.background}, containerStyle]}>
      <Link to={`/projects/${linkTo}`} style={styles.content}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <View style={styles.headers}>
          <Text style={[FontStyles.h1, { marginRight: Layouts.mediumSpacing, color: theme.text }, font ]}>{title}</Text>
          <Text style={[FontStyles.h4, { color: theme.text, opacity: 0.6 }]}>{release}</Text>
        </View>
        { theme.img &&
          <View
            style={[styles.imageContainer, isHovered && { shadowRadius: 80, shadowOpacity: 0.3, transform: [{ scale: 1.017 }] }]}
          >
            <View style={[styles.toolbar, {backgroundColor: !dark ? 'rgba(255,255,255, .6)' : 'rgba(0,0,0,.6)', borderColor: dark ? 'rgba(255,255,255, .24)' : 'rgba(255,255,255, .6)'}]}>
              <View style={[styles.dot, { backgroundColor: '#EB5757'}]}/>
              <View style={[styles.dot, { backgroundColor: '#F2C94C'}]}/>
              <View style={[styles.dot, { backgroundColor: '#27AE60'}]}/>
            </View>
            <View style={[styles.img, { backgroundImage: `url(${theme.img})`, backgroundSize: 'cover' }]}/>
          </View>
        }
      </Link>
    </View>
  )
};

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: Layouts.largeSpacing,
    minHeight: '100vh',
  },
  content: {
    flexWrap: 'wrap',
    margin: 'auto',
    width: '100%',
    maxWidth: 768,
  },
  headers: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: Layouts.mediumSpacing,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {
    ...Layouts.mediumShadow,
    transitionDuration: '170ms',
    transitionTimingFunction: 'cubic-bezier(0.05, 0.70, 0.61, 0.95)',
    width: '100%', height: 'auto', borderRadius: Layouts.mediumRadius, overflow: 'hidden'
  },
  img: {
    width: "100%",
    minHeight: '60vh',
    maxHeight: 900,
  },
  toolbar: {
    width: '100%', flexDirection: 'row', alignItems: 'center', height: 30,
    paddingHorizontal: Layouts.mediumSpacing,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: Layouts.mediumRadius,
    borderTopRightRadius: Layouts.mediumRadius,
  },
  dot: {
    width: 12,
    height: 12,
    marginHorizontal: 4,
    borderRadius: 24
  }
})

export default HeroBlock;
