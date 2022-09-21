import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';

interface EditProfilScreenProps {}

const EditProfilScreen: FunctionComponent<EditProfilScreenProps> = ({}) => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>EditProfilScreen</Text>
    </SafeAreaView>
  );
};
export default EditProfilScreen;
const styles = StyleSheet.create({});
