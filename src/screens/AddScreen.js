/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../utils/thema';

export default function UserAddScreen() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size="32" color={COLOR.GRAY} style={{marginVertical: 40}} />
      </TouchableOpacity>

      <Input placeholder={'Name'} label={'Name'} />
      <Input placeholder={'Surname'} label={'Surname'} />
      <Input placeholder={'Phone'} label={'Phone'} />
      <Input placeholder={'Age'} label={'Age'} />
      <Button title="Add" />
    </View>
  );
}
