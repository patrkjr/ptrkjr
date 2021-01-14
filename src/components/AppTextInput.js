import React, { useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { FontStyles, Colors, Layouts } from '../../constants/Styles';

const AppTextInput = ({ value, onChangeText, onSubmit, ...otherProps }) => {
  const ref = useRef(null);
  const onHandleSubmit = () => {
    onSubmit(ref);

  }
  return <View style={styles.container}>
    <TextInput
      ref={ref}
      style={styles.input}
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
    borderRadius: Layouts.borderRadius,
    backgroundColor: Colors.mediumOpacityBlack,
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
