import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfilStackParams } from '../../Navigation/ProfilStackNav';
import CustomProfilPicture from '../../components/CustomProfilPicture/CustomProfilPicture';
import { COLORS, FONTSIZE, FONTWEIGHT, SPACE } from '../../constants/GLOBAL';

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
      <View style={styles.profilPicContainer}>
        <CustomProfilPicture
          heightSize={300}
          widthtSize={300}
          backgroundColor={'red'}
          positionMode={'relative'}
          topPosition={0}
          rightPosition={0}
        />
        <CustomProfilPicture
          heightSize={90}
          widthtSize={90}
          backgroundColor={'orange'}
          positionMode={'absolute'}
          topPosition={218}
          rightPosition={60}
        />
      </View>
      <Text style={styles.profilName}> Name </Text>
      <Text onPress={onEditProfil}>Edit Profil here</Text>
    </SafeAreaView>
  );
};
export default ProfilScreen;
const styles = StyleSheet.create({
  profilPicContainer: {
    alignItems: 'center',
    backgroundColor: 'green',
  },

  profilName: {
    fontSize: FONTSIZE.H2_MAIN_HEADING,
    color: COLORS.TEXT_COLORS_FIRST,
    fontWeight: FONTWEIGHT.PARAGRAPH_HEADING,
    padding: SPACE.GUTTER,
    textAlign: 'center',
  },
});
