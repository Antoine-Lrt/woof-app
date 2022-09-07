import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT} from './src/constants/GLOBAL'
import {useFonts} from 'expo-font'

import CreateAccount from './src/screens/CreateAccount/CreateAccount'
import Login from './src/screens/Login/Login'


interface style {
  fontSize: number
  fonttWeight: string
}
export default function App() {

  const [fontLoader] = useFonts({
    'SF-PRO': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'Wicked-Mouse': require('./assets/fonts/Wicked-Mouse-Demo.otf')
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <CustomButton type='ACTIVE_PRIMARY' onPress={buttonPressed} text='Default' />
      <CustomButton type='ACTIVE_SECONDARY' onPress={buttonPressed} text='Default' />
      <CustomButton type='DISABLED' onPress={buttonPressed} text='Default' />
      <CustomButton type='TEXT_BUTTON_PRIMARY' onPress={buttonPressed} text='Default' />
      <CustomButton type='TEXT_BUTTON_SECONDARY' onPress={buttonPressed} text='Default' />
      <CustomButton size='SMALL' type='ACTIVE_PRIMARY' onPress={buttonPressed} text='Default' />
      <CustomButton size='SMALL' type='ACTIVE_SECONDARY' onPress={buttonPressed} text='Default' />
      <CustomButton size='SMALL' type='DISABLED' onPress={buttonPressed} text='Default' />
      <CustomButton size='SMALL' type='TEXT_BUTTON_PRIMARY' onPress={buttonPressed} text='Default' />
      <CustomButton size='SMALL' type='TEXT_BUTTON_SECONDARY' onPress={buttonPressed} text='Default' /> */}

      <Login />
      {/* <CreateAccount/> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLORS_FIRST,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
