import { StyleSheet, Text, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfilStackNav from './ProfilStackNav';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/GLOBAL';
import ChatScreen from '../screens/ChatScreen.tsx/ChatScreen';

export type TabBarsParams = {
  Home: undefined;
  ProfilStackNav: undefined;
  Chat: undefined;
};

interface TabBarProps {
  focused: boolean;
  iconeName: keyof typeof Ionicons.glyphMap;
}

const Tab = createBottomTabNavigator<TabBarsParams>();

const TabBar = ({ iconeName }: TabBarProps) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            iconeName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'ProfilStackNav') {
            iconeName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'Chat') {
            iconeName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          }
          return <Ionicons name={iconeName} size={25} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='ProfilStackNav' component={ProfilStackNav} />
      <Tab.Screen
        name='Chat'
        component={ChatScreen}
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
