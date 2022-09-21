/* eslint-disable react/function-component-definition */
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import React, { FunctionComponent } from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT, SIZE } from '../../constants/GLOBAL';

interface CustomButtonProps {
  text: string;
  type:
    | 'ACTIVE_PRIMARY'
    | 'ACTIVE_SECONDARY'
    | 'DISABLED'
    | 'TEXT_BUTTON_PRIMARY'
    | 'TEXT_BUTTON_SECONDARY';
  onPress: () => void;
  size: 'LARGE' | 'SMALL';
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  onPress,
  type,
  size = 'LARGE',
}) => (
  <SafeAreaView>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.customButton, styles[`customButton_${type}`], styles[`customButton_${size}`]]}
    >
      <Text style={[styles.customButton_text, styles[`customButton_text_${type}`]]}> {text} </Text>
    </TouchableOpacity>
  </SafeAreaView>
);
export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: SIZE.HEIGHT,
    marginTop: 5,
    marginBottom: 5,
  },
  // eslint-disable-next-line camelcase
  customButton_LARGE: {
    width: SIZE.LARGE_WIDTH,
  },
  // eslint-disable-next-line camelcase
  customButton_SMALL: {
    width: SIZE.SMALL_WIDTH,
  },
  // eslint-disable-next-line camelcase
  customButton_ACTIVE_PRIMARY: {
    backgroundColor: COLORS.PRIMARY_COLORS_FIRST,
  },
  // eslint-disable-next-line camelcase
  customButton_ACTIVE_SECONDARY: {
    backgroundColor: COLORS.BACKGROUND_COLORS_FIRST,
    borderColor: COLORS.PRIMARY_COLORS_FIRST,
    borderWidth: 2,
  },
  // eslint-disable-next-line camelcase
  customButton_DISABLED: {
    backgroundColor: COLORS.BACKGROUND_COLORS_SECOND,
  },
  // eslint-disable-next-line camelcase
  customButton_TEXT_BUTTON_PRIMARY: {
    backgroundColor: COLORS.BACKGROUND_COLORS_FIRST,
  },
  // eslint-disable-next-line camelcase
  customButton_TEXT_BUTTON_SECONDARY: {
    backgroundColor: 'transparent',
  },
  // eslint-disable-next-line camelcase
  customButton_text: {
    fontSize: FONTSIZE.H5_INPUT_TITLE,
    fontWeight: FONTWEIGHT.INPUT_TITLE,
    fontFamily: FONTFAMILY.SF_PRO,
  },
  // eslint-disable-next-line camelcase
  customButton_text_ACTIVE_PRIMARY: {
    color: COLORS.TEXT_COLORS_THIRD,
  },
  // eslint-disable-next-line camelcase
  customButton_text_ACTIVE_SECONDARY: {
    color: COLORS.TEXT_COLORS_SECOND,
  },
  // eslint-disable-next-line camelcase
  customButton_text_DISABLED: {
    color: COLORS.TEXT_COLORS_DISABLED,
  },
  // eslint-disable-next-line camelcase
  customButton_text_TEXT_BUTTON_PRIMARY: {
    color: COLORS.TEXT_COLORS_SECOND,
  },
  // eslint-disable-next-line camelcase
  customButton_text_TEXT_BUTTON_SECONDARY: {
    color: COLORS.TEXT_COLORS_DISABLED,
  },
});
