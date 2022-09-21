import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React, { FunctionComponent } from 'react';

interface CustomProfilPictureProps {
  heightSize: number;
  widthtSize: number;
  backgroundColor: string;
  positionMode: 'absolute' | 'relative' | undefined;
  topPosition: number;
  rightPosition: number;
}

const styles = StyleSheet.create({});

const CustomProfilPicture: FunctionComponent<CustomProfilPictureProps> = ({
  heightSize,
  widthtSize,
  backgroundColor,
  positionMode,
  topPosition,
  rightPosition,
}) => {
  return (
    <View
      style={{
        height: heightSize,
        width: widthtSize,
        borderRadius: 200,
        backgroundColor: backgroundColor,
        position: positionMode,
        top: topPosition,
        right: rightPosition,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text> Picture </Text>
    </View>
  );
};
export default CustomProfilPicture;
