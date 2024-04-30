/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/thema';

export default function Add({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: COLOR.GREEN,
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      }}>
      <Text style={{fontSize: 30, fontWeight: 200, color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
}
