/* eslint-disable react-native/no-inline-styles */
// CallCard.js
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {Call, Video} from 'iconsax-react-native';
import {COLOR} from '../utils/thema';

export default function CallCard({data}) {
  const handleCall = () => {
    Linking.openURL(`tel:${data.phone}`);
  };

  return (
    <TouchableOpacity onPress={handleCall}>
      <View>
        <TouchableOpacity style={{marginEnd: 10}}>
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
              <Avatar
                img={data.info.photo}
                name={data.info.name}
                size={70}
                status={data.status}
              />
              <View>
                <Text style={{fontSize: 18}}>
                  {data.info.name} {data.info.surname}
                </Text>
                <Text style={{color: COLOR.GRAY}}>{data.time}</Text>
              </View>
            </View>
            {data.info.type === 'incoming' && (
              <Call size="26" color={COLOR.GREEN} />
            )}
            {data.info.type === 'outgoing' && (
              <Call size="26" color={COLOR.RED} />
            )}
            {data.info.type === 'invideo' && (
              <Video size="26" color={COLOR.GREEN} />
            )}
            {data.info.type === 'outvideo' && (
              <Video size="26" color={COLOR.RED} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
