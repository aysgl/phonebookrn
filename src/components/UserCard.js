/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {Call, Video} from 'iconsax-react-native';
import {COLOR} from '../utils/thema';

export default function UserCard({data}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Avatar img={data.photo} name={data.name} size={50} />
          <View>
            <Text style={{fontSize: 18, fontWeight: 600}}>
              {data.name} {data.surname}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginEnd: 20}}>
            <Call size="26" color={COLOR.GRAY} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginEnd: 30}}>
            <Video size="26" color={COLOR.GRAY} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
