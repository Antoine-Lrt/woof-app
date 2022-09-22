import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';
import TabBar from './TabBar';

export type RouteParams = {
  Login: undefined;
  Register: undefined;
  TabBar: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name='TabBar'
          component={TabBar}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
