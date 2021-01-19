import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AppButton = ({ title, onPress }) => {
  const { colors } = useTheme();
  return <TouchableOpacity onPress={onPress}>
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.text }}>{title}</Text>
    </View>
  </TouchableOpacity>
}

export default AppButton;
