import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParams } from '../../../Navigation/HomeStackNav';

interface UserScreenProps {}

const UserScreen: FunctionComponent<UserScreenProps> = ({}) => {
  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const onUserHomeScreen = () => {
    navigation.navigate('HomeScreen');
    console.log('Go to HomeScreen');
  };
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text>User Screen</Text>
      <Text style={{ color: 'blue' }} onPress={onUserHomeScreen}>
        Go to HomeScreen
      </Text>
    </SafeAreaView>
  );
};
export default UserScreen;

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
  },

  homeHeader: {
    width: '100%',
    alignItems: 'center',
  },
});
