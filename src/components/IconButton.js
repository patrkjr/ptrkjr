import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconButton = ({ name, size, color, onPress, style }) => {
  return <TouchableOpacity
    style={style}
    onPress={onPress}
  >
    <View>
      <Feather name={name} size={size || 24} color={color || 'black'} />
    </View>
  </TouchableOpacity>
}

export default IconButton;
