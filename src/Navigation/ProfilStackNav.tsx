import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfilScreen from '../screens/EditProfilScreen/EditProfilScreen';
import ProfilScreen from '../screens/ProfilScreen/ProfilScreen';

export type ProfilStackParams = {
  Profil: undefined;
  EditProfil: undefined;
};

const ProfilStack = createNativeStackNavigator<ProfilStackParams>();

const ProfilStackNav = () => {
  return (
    <ProfilStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfilStack.Group>
        <ProfilStack.Screen name='Profil' component={ProfilScreen} />
        <ProfilStack.Screen name='EditProfil' component={EditProfilScreen} />
      </ProfilStack.Group>
    </ProfilStack.Navigator>
  );
};

export default ProfilStackNav;
