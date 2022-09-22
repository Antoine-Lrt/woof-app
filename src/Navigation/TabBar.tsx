import { StyleSheet, Text, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNav from './HomeStackNav';
import ProfilStackNav from './ProfilStackNav';
import ChatStackNav from './ChatStackNav';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/GLOBAL';
import ChatScreen from '../screens/Chat/ChatScreen.tsx/ChatScreen';

export type TabBarsParams = {
  HomeStackNav: undefined;
  ProfilStackNav: undefined;
  ChatStackNav: undefined;
};

const Tab = createBottomTabNavigator<TabBarsParams>();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconeName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'HomeStackNav') {
            iconeName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'ProfilStackNav') {
            iconeName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'ChatStackNav') {
            iconeName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          }
          return <Ionicons name={iconeName} size={25} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='HomeStackNav' component={HomeStackNav} />
      <Tab.Screen name='ProfilStackNav' component={ProfilStackNav} />
      <Tab.Screen
        name='ChatStackNav'
        component={ChatStackNav}
        options={{
          tabBarBadge: 4,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabBarScreenText: {
    fontSize: 10,
  },
});
