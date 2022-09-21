import { KeyboardTypeOptions, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
import React, { FunctionComponent } from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT, SIZE } from '../../constants/GLOBAL';

interface CustomTextFiledProps {
  placeholder?: string;
  value: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
  errorDetails?: string;
}

const CustomTextFiled: FunctionComponent<CustomTextFiledProps> = ({
  placeholder,
  value,
  password = false,
  type = 'default',
  onChangeText,
  onBlur,
  error = false,
  errorDetails,
}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={[
          styles.customTextFiled,
          {
            borderColor: `${error ? COLORS.WARNING_COLORS_FIRST : COLORS.BACKGROUND_COLORS_SECOND}`,
          },
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
      {!!errorDetails && <Text style={styles.textError}>{errorDetails}</Text>}
    </SafeAreaView>
  );
};
export default CustomTextFiled;
const styles = StyleSheet.create({
  customTextFiled: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZE.HEIGHT,
    width: SIZE.LARGE_WIDTH,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    color: COLORS.TEXT_COLORS_FIRST,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.BACKGROUND_COLORS_SECOND,
    fontFamily: FONTFAMILY.SF_PRO,
  },

  textError: {
    color: COLORS.WARNING_COLORS_FIRST,
    fontSize: FONTSIZE.INPUT_PROMPT,
    fontFamily: FONTFAMILY.SF_PRO,
  },
});
