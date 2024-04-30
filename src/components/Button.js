/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/thema';

export default function Button({title}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLOR.GREEN,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
      }}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
