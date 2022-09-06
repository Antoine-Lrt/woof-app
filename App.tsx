import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT} from './src/constants/GLOBAL'
import CustomButton from './src/components/CustomButton/CustomButton';
import CustomTextFiled from './src/components/CustomTextFiled/CustomTextFiled'

interface style {
  fontSize: number
  fonttWeight: string
}
export default function App() {

  const buttonPressed = () => {
    console.log("button pressed");
    
  }

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
      <CustomTextFiled />
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
