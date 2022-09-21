import { StyleSheet, Image, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { SPACE } from '../../constants/GLOBAL';

interface LogoValues {
  widthSize: number;
  heightSize: number;
}

const Logo: FunctionComponent<LogoValues> = ({ widthSize, heightSize }) => {
  return (
    // <View style={{ backgroundColor: 'red' }}>
    <Image
      source={require('../../../assets/images/woof-logo.png')}
      style={{ width: widthSize, height: heightSize, resizeMode: 'center' }}
    />
    // </View>
  );
};
export default Logo;
