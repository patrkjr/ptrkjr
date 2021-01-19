import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontStyles } from '../../constants/Styles';

const FancyText = ({ children, style }) => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[FontStyles.h1, { color: colors.primary }, style]}>{children}</Text>
    </View>
  )
};


export default FancyText;
