import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const IconButton = ({ name, size, color, onPress, style }) => {
  const { colors } = useTheme();
  return <TouchableOpacity
    style={style}
    onPress={onPress}
  >
    <View>
      <Feather name={name} size={size || 24} color={color || colors.text} />
    </View>
  </TouchableOpacity>
}

export default IconButton;
