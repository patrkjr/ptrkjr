import React, { useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { FontStyles, Colors, Layouts } from '../../constants/Styles';

const AppTextInput = ({ value, onChangeText, onSubmit, ...otherProps }) => {
  const { dark, colors } = useTheme();
  const ref = useRef(null);
  const onHandleSubmit = () => {
    onSubmit(ref);

  }
  return <View style={[styles.container,  {backgroundColor: colors.cardBackground}]}>
    <TextInput
      ref={ref}
      style={[styles.input, { color: colors.text }]}
      value={value}
      multiline={true}
      blurOnSubmit={true}
      onSubmitEditing={() => {
        onHandleSubmit()
      }}
      onChangeText={(text) => onChangeText(text)}
      {...otherProps}
    />
  </View>
}

// IDEA: Use hooks for focus state, to change style
const styles = StyleSheet.create({
  container: {
    borderRadius: Layouts.mediumRadius,
    flex: 1,
  },
  input: {
    flex: 1,
    ...FontStyles.h6,
    width: '100%',
    padding: Layouts.mediumSpacing,
  }
})

export default AppTextInput;
