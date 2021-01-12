import React, { useState, useEffect } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { Colors, FontStyles, Layouts } from '../../constants/Styles'

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();
  const [dimensions, setDimensions] = useState(
    {
      window: Dimensions.get('window')
    }
  );

  const onChange = ({ window }) => {
    setDimensions({ window });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });
  return <View style={{ flex: 1 }}>
    <View
      style={[styles.heroContainer, { height: dimensions.window.height - headerHeight }]}
    >
      <Image
        style={styles.profileImage}
        source={require('../../assets/profile_small.jpeg')}
      />
      <View
        style={styles.chatBox}
      >
        <Text style={[FontStyles.h5, styles.chatText]}>Hi, I'm Patrick, and I'm a</Text>
      </View>
      <Text style={[FontStyles.h1, styles.jumboHeading]}>
        Product {'\n'}
        Designer
      </Text>
    </View>
    <View style={{ height: 200, backgroundColor: 'orange'}}>

    </View>
  </View>
}

 const demo = {
   '0%': { opacity: 0 },
   '100%': { opacity: 1 },
}

const styles = StyleSheet.create({
 heroContainer: {
   alignItems: 'center',
   justifyContent: 'space-around',
   padding: 100,
   minHeight: 200,
   backgroundImage: `linear-gradient(145deg,${Colors.primary}, ${Colors.secondary})`
 },
  profileImage: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
  chatBox: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Layouts.borderRadius,
    ...Layouts.mediumShadow
  },
  chatText: {
    color: Colors.white,
    padding: Layouts.mediumSpacing,
    paddingHorizontal: Layouts.largeSpacing
  },
  jumboHeading: {
    color: Colors.white,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0,
    textTransform: 'upperCase',
    animationKeyframes: demo,
    animationDelay: '1s',
    animationDuration: '2s',
    animationFillMode: 'both'
  }
})

export default HomeScreen;
