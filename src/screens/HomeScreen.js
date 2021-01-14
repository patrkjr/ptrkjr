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
   padding: Layouts.largeSpacing,
   alignItems: 'center',
   justifyContent: 'space-around',
   backgroundImage: `linear-gradient(145deg,${Colors.primary}, ${Colors.secondary})`
 },

})

export default HomeScreen;
