import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Layouts } from '../../constants/Styles';

const durationMS = 1500;
const delay = {
  second: (durationMS / 10 * 1) + "ms",
  third: (durationMS / 10 * 2) + "ms"
}

const Bubbles = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <View style={[styles.bubble, { backgroundColor: colors.text }]}/>
      <View style={[styles.bubble, { animationDelay: delay.second, backgroundColor: colors.text }]}/>
      <View style={[styles.bubble, { animationDelay: delay.third, backgroundColor: colors.text }]}/>
    </View>
  )
}

const animationKeyframes = {
  '20%': {
    bottom: 0
  },
  '50%': {
    bottom: 12
  },
  '70%': {
    bottom: 0
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Layouts.borderRadius,
    paddingHorizontal: Layouts.mediumSpacing,
    height: 55,
    width: 104,
  },
  bubble: {
    width: 20,
    height: 20,
    borderRadius: 24,
    opacity: 0.5,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'both',
    animationDuration: durationMS + "ms",
    animationKeyframes
  }
})

export default Bubbles;
