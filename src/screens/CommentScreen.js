/* eslint-disable react-native/no-inline-styles */
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import React from 'react';
import CommentCard from '../components/CommentCard';

export default function CommentScreen() {
  const comments = [
    {
      id: 3,
      username: 'Michael Johnson',
      date: '2024-04-30T11:30:00Z',
      chats: [
        {
          id: 2,
          participants: ['John Doe', 'Michael Johnson'],
          messages: [
            {
              id: 3,
              sender: 'John Doe',
              content: 'Hey Michael!',
              timestamp: '2024-04-30T11:30:00Z',
            },
            {
              id: 4,
              sender: 'Michael Johnson',
              content: 'Hello John!',
              timestamp: '2024-04-30T11:32:00Z',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      username: 'John Doe',
      date: '2024-04-17T10:15:00Z',
      chats: [
        {
          id: 1,
          participants: ['John Doe', 'Jane Smith'],
          messages: [
            {
              id: 1,
              sender: 'John Doe',
              content: 'Hello Jane! How are you? What are you doing?',
              timestamp: '2024-04-17T10:15:00Z',
            },
            {
              id: 1,
              sender: 'John Doe',
              content: 'When we start talking about programming?',
              timestamp: '2024-04-17T10:17:00Z',
            },
            {
              id: 2,
              sender: 'Jane Smith',
              content: 'Hi John!',
              timestamp: '2024-04-17T10:18:00Z',
            },
            {
              id: 2,
              sender: 'Jane Smith',
              content: 'We start this now!',
              timestamp: '2024-04-30T16:18:00Z',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      username: 'Jane Smith',
      date: '2024-04-16T10:15:00Z',
      chats: [
        {
          id: 1,
          participants: ['John Doe', 'Jane Smith'],
          messages: [
            {
              id: 1,
              sender: 'John Doe',
              content: 'Hello Jane!',
              timestamp: '2024-04-16T10:15:00Z',
            },
            {
              id: 2,
              sender: 'Jane Smith',
              content: 'Hi John!',
              timestamp: '2024-04-16T10:17:00Z',
            },
          ],
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 10, paddingTop: 10}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 100,
            marginBottom: 20,
            marginTop: 40,
          }}>
          Comments
        </Text>
        <FlatList
          data={comments}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CommentCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
