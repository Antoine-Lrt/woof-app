import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfilStackParams } from '../../../Navigation/ProfilStackNav';

interface EditProfilScreenProps {}

const EditProfilScreen: FunctionComponent<EditProfilScreenProps> = ({}) => {
  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<ProfilStackParams>>();

  const onProfil = () => {
    navigation.navigate('Profil');
    console.log('Go to Profil');
  };
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text>EditProfilScreen</Text>
      <Text style={{ color: 'blue' }} onPress={onProfil}>
        Go to ProfilScreen
      </Text>
    </SafeAreaView>
  );
};
export default EditProfilScreen;
const styles = StyleSheet.create({});
