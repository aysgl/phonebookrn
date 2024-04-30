/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {COLOR} from '../utils/thema';
import {useNavigation} from '@react-navigation/native';

export default function CommentCard({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CommentDetail', {data: data})}>
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
            alignItems: 'center',
            gap: 10,
            width: '100%',
          }}>
          <Avatar img={data.photo} name={data.username} size={50} />
          <View style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, fontWeight: 600}}>
                {data.username}
              </Text>
              <Text
                style={{
                  color: COLOR.GRAY,
                }}>
                {data.date}
              </Text>
            </View>
            <Text style={{color: COLOR.GRAY}}>
              {data.chats.map(chat =>
                chat.messages.map(message => message.content),
              )}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
