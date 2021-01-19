import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Separator = ({ thickness, opacity, theme }) => {
  const backgroundColor = theme ||
    useTheme().dark ? 'white' : 'black'
  return (
    <View style={{
      width: '100%',
      height: thickness || 1,
      opacity: opacity || 0.12,
      backgroundColor
    }}/>
  )
}

export default Separator;
