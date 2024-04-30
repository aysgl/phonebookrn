/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {ArrowLeft, Send} from 'iconsax-react-native';
import Avatar from '../components/Avatar';
import {COLOR} from '../utils/thema';
import moment from 'moment';

export default function CommentDetail({route, navigation}) {
  const {data} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            size="32"
            color={COLOR.GRAY}
            style={{marginVertical: 10}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Avatar name={data.username} size={50} />
          <Text
            style={{
              fontSize: 40,
              fontWeight: 100,
              marginStart: 10,
            }}>
            {data.username}
          </Text>
        </View>

        <FlatList
          data={data.chats}
          renderItem={({item}) => (
            <View style={{marginTop: 20}}>
              {item.messages.map((m, i) =>
                m.sender === 'John Doe' ? (
                  <View
                    style={{
                      backgroundColor: COLOR.LIGHTGRAY,
                      borderRadius: 10,
                      borderEndStartRadius: 0,
                      marginBottom: 10,
                      padding: 20,
                      maxWidth: '80%',
                      alignSelf: 'flex-start',
                    }}
                    key={i}>
                    <Text>{m.content}</Text>
                    <Text>
                      {moment(m.timestamp).isSame(new Date(), 'day')
                        ? moment(m.timestamp).startOf('hour').fromNow()
                        : moment(m.timestamp).format('LLL')}
                    </Text>
                  </View>
                ) : (
                  <View
                    key={i}
                    style={{
                      backgroundColor: COLOR.BLUE,
                      borderRadius: 10,
                      borderEndEndRadius: 0,
                      marginBottom: 10,
                      padding: 20,
                      maxWidth: '80%',
                      alignSelf: 'flex-end',
                    }}>
                    <Text>{m.sender === 'John Doe' ? '' : m.sender}</Text>
                    <Text>{m.content}</Text>
                    <Text>
                      {moment(m.timestamp).isSame(new Date(), 'day')
                        ? moment(m.timestamp).startOf('hour').fromNow()
                        : moment(m.timestamp).format('LLL')}
                    </Text>
                  </View>
                ),
              )}
            </View>
          )}
        />
      </View>
      <View
        style={{
          //   backgroundColor: '#EEEFF2',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              backgroundColor: '#EEEFF2',
              height: 46,
              borderRadius: 60,
              width: '85%',
              paddingHorizontal: 20,
              marginEnd: 10,
            }}
          />
          <View
            style={{
              backgroundColor: COLOR.LIGHTGRAY,
              width: 44,
              height: 44,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Send size="26" color={COLOR.WHITE} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
