import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS } from './src/constants/GLOBAL';

import Login from './src/screens/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator';

interface style {
  fontSize: number;
  fonttWeight: string;
}
export default function App() {
  const [fontLoader] = useFonts({
    'SF-PRO': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'Wicked-Mouse': require('./assets/fonts/Wicked-Mouse-Demo.otf'),
  });

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
