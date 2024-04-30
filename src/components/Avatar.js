/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/thema';

const generateRandomColor = () => {
  const colors = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FF33A1',
    '#33A1FF',
    '#A1FF33',
    '#FF3373',
    '#3373FF',
    '#33FFA1',
    '#A133FF',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default function Avatar({img, name, size, status}) {
  return (
    <View>
      {img ? (
        <Image
          style={[styles.image, {width: size, height: size}]}
          source={{uri: img}}
        />
      ) : (
        <View
          style={[
            styles.image,
            {width: size, height: size, backgroundColor: generateRandomColor()},
          ]}>
          <Text style={{fontSize: 30, fontWeight: 100, color: 'white'}}>
            {name.slice(0, 1)}
          </Text>
        </View>
      )}
      {status && (
        <View
          style={{
            width: 10,
            height: 10,
            position: 'absolute',
            backgroundColor: status === 'online' ? COLOR.GREEN : COLOR.RED,
            right: 4,
            bottom: 4,
            borderRadius: 50,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
