import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import Logo from '../../../components/Logo/Logo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParams } from '../../../Navigation/HomeStackNav';

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({}) => {
  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const onUserScreen = () => {
    navigation.navigate('UserScreen');
    console.log('Go to UserScreen');
  };
  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar style='auto' />
      <View style={styles.homeHeader}>
        <Logo widthSize={100} heightSize={70} />
        <Text>Home Screen</Text>
        <Text style={{ color: 'blue' }} onPress={onUserScreen}>
          Go to UserScreen
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
  },

  homeHeader: {
    width: '100%',
    alignItems: 'center',
  },
});
