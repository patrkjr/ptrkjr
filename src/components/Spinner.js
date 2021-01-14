import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Colors } from '../../constants/Styles';

const Spinner = ({ size, color }) => {
  return <View style={{ flex: 1, justifyContent: 'center'}}>
    <ActivityIndicator
      size={size || 'large'}
      color={color || Colors.primary}
    />
  </View>
}

export default Spinner;
