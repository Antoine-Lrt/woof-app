import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfilStackParams } from '../../Navigation/ProfilStackNav';

interface ProfilScreenProps {}

const ProfilScreen: FunctionComponent<ProfilScreenProps> = ({}) => {
  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<ProfilStackParams>>();

  const onEditProfil = () => {
    navigation.navigate('EditProfil');
    console.warn('Go to Edit Profil');
  };
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Profil</Text>
      <Text onPress={onEditProfil}>Edit Profil here</Text>
    </SafeAreaView>
  );
};
export default ProfilScreen;
const styles = StyleSheet.create({});
