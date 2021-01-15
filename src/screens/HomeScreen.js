import React, { useState, useEffect } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { Layouts, Colors } from '../../constants/Styles'
import ChatWindow from '../components/ChatWindow';

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
  //// BUG: useHeaderRight returns 0, but only when making viewport smaller
  //// Have hard coded marginTop for now, as mitigation
  return <View
      style={[styles.heroContainer, { height: dimensions.window.height - headerHeight, marginTop: 65 }]}
    >
        <View style={[styles.gradient, { top: -100, left: 150 }]}/>
        <View style={[styles.gradient, { top: 350, left: 20, transform: 'rotate(-10deg)', }]}/>
        <View style={[styles.gradient, { top: -20, right: -450 }]}/>
        <ChatWindow width={() => {
          const width = dimensions.window.width;
          if (width < 461) {
            return 300;
          }
          if (width < 500) {
            return 320
          }
          if (width < 769) {
            return 480
          }
          if (width < 1025) {
            return 650
          }
          return 800
        }}/>
      </View>
}

const styles = StyleSheet.create({
 heroContainer: {
   flex: 1,
   overflow: 'hidden',
   padding: Layouts.largeSpacing,
   alignItems: 'center',
   minHeight: 400,
   justifyContent: 'space-around',
   backgroundImage: `linear-gradient(145deg,${Colors.primary}, ${Colors.secondary})`
 },
 gradient: {
   position: 'absolute',
   borderRadius: Layouts.jumboRadius,
   transform: 'rotate(-20deg)',
   height: 1000,
   width: 800,
   backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))`
 }

})

export default HomeScreen;
