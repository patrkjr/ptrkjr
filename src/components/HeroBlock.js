import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Layouts, FontStyles } from '../../constants/Styles';

const HeroBlock = ({ title, release, font, theme, containerStyle }) => {
  return(
    <View style={[styles.hero, {backgroundColor: theme.background}, containerStyle]}>
      <View style={styles.content}>
        <View style={styles.headers}>
          <Text style={[FontStyles.h1, { marginRight: Layouts.mediumSpacing, color: theme.text }, font ]}>{title}</Text>
          <Text style={[FontStyles.h4, { textAlign: 'right', color: theme.text, opacity: 0.6 }]}>{release}</Text>
        </View>
        { theme.img &&
          <Image style={styles.img} source={theme.img}
            resizeMode={'cover'}
            accessibilityLabel={`Image of ${title} projetct`}
          />
        }
      </View>
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
    flex: 1,
    justifyContent: 'center',
    margin: 'auto',
    width: '100%',
    maxWidth: 960,
  },
  headers: {
    marginBottom: Layouts.mediumSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    top: 0,
    width: "100%",
    height: 520,
    overflow: 'hidden',
    borderRadius: Layouts.mediumRadius
  }
})

export default HeroBlock;
