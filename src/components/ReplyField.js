import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppTextInput from './AppTextInput';
import IconButton from './IconButton';
import Separator from './Separator'

import { Colors, Layouts } from '../../constants/Styles';

const ReplyField = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const onHandleSubmit = (ref) => {
    if (ref) {
      ref.current.focus()
    }
    if (value !== '') {
      onSubmit(value);
    }
    setValue('');
  }

  return <>
  <Separator/>
  <View style={styles.container}>
    <AppTextInput
      value={value}
      onChangeText={(text) => {
        setValue(text);
      }}
      placeholder={"Message"}
      onSubmit={(ref) => {
        onHandleSubmit(ref)
      }}
    />
    <IconButton
      style={styles.sendButton}
      name={'arrow-right'}
      size={30}
      color={Colors.white}
      onPress={() => {
        onHandleSubmit();
      }}
    />
  </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    padding: Layouts.mediumSpacing,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sendButton: {
    height: 48,
    width: 48,
    marginLeft: Layouts.mediumSpacing,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: Colors.primary
  }
})

export default ReplyField;