/* eslint-disable react-hooks/exhaustive-deps */
// UserListScreen.js
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CallCard from '../components/CallCard';

export default function UserListScreen() {
  const [sortedData, setSortedData] = useState([]);

  const data = [
    {
      date: '2024-04-15',
      time: '09:45:00',
      status: 'online',
      info: {
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '+905393242038',
        photo:
          'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
        type: 'outgoing',
      },
    },
    {
      date: '2024-04-20',
      time: '18:20:00',
      status: 'online',
      info: {
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '+905393242038',
        photo:
          'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
        type: 'outvideo',
      },
    },
    {
      date: '2024-04-16',
      time: '12:20:00',
      status: 'offline',
      info: {
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        phone: '+905381234542',
        photo: null,
        type: 'incoming',
      },
    },
    {
      date: '2024-04-15',
      time: '16:30:00',
      status: 'offline',
      info: {
        name: 'Michael Johnson',
        email: 'michael@example.com',
        phone: '+33123456789',
        photo: null,
        type: 'invideo',
      },
    },
    {
      date: '2024-04-15',
      time: '16:00:00',
      status: 'online',
      info: {
        name: 'Michael Johnson',
        email: 'michael@example.com',
        phone: '+33123456789',
        photo: null,
        type: 'outvideo',
      },
    },
    {
      date: '2024-04-17',
      time: '09:30:00',
      status: 'offline',
      info: {
        name: 'Emily Brown',
        email: 'emily@example.com',
        phone: '+61212345678',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'incoming',
      },
    },
    {
      date: '2024-04-14',
      time: '13:40:00',
      status: 'offline',
      info: {
        name: 'Emily Brown',
        email: 'emily@example.com',
        phone: '+61212345678',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'outgoing',
      },
    },
  ];

  useEffect(() => {
    const sorted = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
    setSortedData(sorted);
  }, []);

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
          Last Call
        </Text>
        <FlatList
          data={sortedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CallCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
