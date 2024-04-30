/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({placeholder, onChangeText, value}) => {
  return (
    <View style={{borderRadius: 60}}>
      <TextInput
        style={[styles.input, {marginBottom: 10}]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 60,
    backgroundColor: 'white',
    borderColor: 'rgba(211, 211, 211, 0.8)',
  },
});

export default Input;
