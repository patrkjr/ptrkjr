import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const AppButton = ({ title, onPress }) => {
  return <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
}

export default AppButton;
