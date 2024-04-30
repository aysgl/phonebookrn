import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import AddScreen from '../screens/AddScreen';
import CommentDetail from '../screens/CommentDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="CommentDetail" component={CommentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
