import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import Logo from '../../components/Logo/Logo';

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({}) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar style='auto' />
      <View style={styles.homeHeader}>
        <Logo widthSize={100} heightSize={70} />
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
