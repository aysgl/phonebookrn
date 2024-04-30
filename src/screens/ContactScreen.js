/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../components/UserCard';
import {COLOR} from '../utils/thema';
import Input from '../components/Input';
import Add from '../components/Add';
import {useNavigation} from '@react-navigation/native';

const users = [
  {
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
    phone: '+90 538 123 45 42',
    photo:
      'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
  },
  {
    name: 'Alice',
    surname: 'Smith',
    email: 'alice@example.com',
    phone: '+1 555 123 4567',
    photo: null,
  },
  {
    name: 'Jane',
    surname: 'Doe',
    email: 'jane@example.com',
    phone: '+44 20 1234 5678',
    photo: null,
  },
  {
    name: 'Michael',
    surname: 'Johnson',
    email: 'michael@example.com',
    phone: '+33 1 23 45 67 89',
    photo: null,
  },
  {
    name: 'Emily',
    surname: 'Brown',
    email: 'emily@example.com',
    phone: '+61 2 1234 5678',
    photo: null,
  },
  {
    name: 'David',
    surname: 'Wilson',
    email: 'david@example.com',
    phone: '+49 30 123456789',
    photo: null,
  },
  {
    name: 'Sophia',
    surname: 'Martinez',
    email: 'sophia@example.com',
    phone: '+55 11 1234 5678',
    photo: null,
  },
  {
    name: 'Matthew',
    surname: 'Taylor',
    email: 'matthew@example.com',
    phone: '+7 495 123 45 67',
    photo: null,
  },
  {
    name: 'Olivia',
    surname: 'Garcia',
    email: 'olivia@example.com',
    phone: '+81 3 1234 5678',
    photo: null,
  },
  {
    name: 'William',
    surname: 'Rodriguez',
    email: 'william@example.com',
    phone: '+82 2 1234 5678',
    photo: null,
  },
];

export default function ContactScreen() {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [alphabet, setAlphabet] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const letters = new Set();
    users.forEach(user => {
      const firstLetter = user.name.charAt(0).toUpperCase();
      if (firstLetter >= 'A' && firstLetter <= 'Z') {
        letters.add(firstLetter);
      }
    });
    setAlphabet(Array.from(letters).sort());

    users.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filterUsersByLetter = letter => {
    setSelectedLetter(letter);
  };

  const filteredUsers =
    selectedLetter === 'All'
      ? users
      : users.filter(user =>
          user.name.toUpperCase().startsWith(selectedLetter),
        );

  const searchFilter = text => {
    setSearchText(text);
  };

  const filteredUsersByName = searchText
    ? users.filter(
        user =>
          user.name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.surname.toLowerCase().includes(searchText.toLowerCase()),
      )
    : filteredUsers;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
        height: '100%',
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 10,
          height: '100%',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 100,
            marginBottom: 20,
            marginTop: 40,
          }}>
          Contact
        </Text>
        <Input
          onChangeText={text => searchFilter(text)}
          value={searchText}
          placeholder="Search"
        />

        <View
          style={{
            flexDirection: 'column',
            width: 30,
            position: 'absolute',
            right: 0,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            top: '45%',
            transform: [{translateY: -45}],
          }}>
          {['All', ...alphabet].map(letter => (
            <TouchableOpacity
              key={letter}
              onPress={() => filterUsersByLetter(letter)}
              style={{padding: 4}}>
              <Text
                style={{
                  color:
                    selectedLetter === letter ? COLOR.GRAY : COLOR.LIGHTGRAY,
                }}>
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredUsersByName}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <UserCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <Add onPress={() => navigation.navigate({name: 'Add'})} />
      </View>
    </SafeAreaView>
  );
}
