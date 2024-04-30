/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallScreen from '../screens/CallScreen';
import {Call, Messages2, Profile2User} from 'iconsax-react-native';
import CommentScreen from '../screens/CommentScreen';
import ContactScreen from '../screens/ContactScreen';
import {COLOR} from '../utils/thema';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.GREEN,
        tabBarInactiveTintColor: COLOR.GRAY,
        headerShown: false,
      }}>
      <Tab.Screen
        name="User List"
        component={CallScreen}
        options={{
          tabBarIcon: ({color, size}) => <Call color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Contact List"
        component={ContactScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Profile2User size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Comment"
        component={CommentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Messages2 size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
