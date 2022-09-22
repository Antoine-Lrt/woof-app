import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
import UserScreen from '../screens/Home/HomeUserScreen/HomeUserScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
  UserScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Group>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        <HomeStack.Screen name='UserScreen' component={UserScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
