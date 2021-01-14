import React from 'react';
import { View } from 'react-native';

const Separator = ({ thickness, opacity, theme }) => {
  const backgroundColor = theme === 'dark-content' ? 'white' : 'black'
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
