/* eslint-disable react/function-component-definition */
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextFiled from '../../components/CustomTextFiled/CustomTextFiled';
import { COLORS, FONTSIZE, FONTFAMILY } from '../../constants/GLOBAL';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../Navigation/RootNavigator';

type RegisterScreenProps = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen: FunctionComponent = () => {
  // FORM
  const validation = Yup.object({
    pseudo: Yup.string().required('Veuillez saisir votre Pseudo'),
    email: Yup.string()
      .email('Veuillez saisir une adresse mail valide')
      .required('Veuillez saisir une adresse mail'),
    password: Yup.string()
      .min(8, 'Veuillez saisir au moins 8 caractères')
      .required('Veuillez saisir un mot de passe'),
    confirmPassword: Yup.string()
      .required('Veuillez confirmer votre mot de passe')
      .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  }).required();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterScreenProps>({
    mode: 'onBlur',
    resolver: yupResolver(validation),
  });

  const onSignUp = () => {
    clearErrors();
    console.warn('Register');
  };

  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onGoLogin = () => {
    clearErrors();
    navigation.navigate('Login');
    console.warn('Go to Login');
  };

  return (
    <SafeAreaView style={styles.registerContainer}>
      <StatusBar style='auto' />
      <ScrollView>
        <Controller
          control={control}
          name='pseudo'
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <CustomTextFiled
              value={value}
              placeholder='Pseudo'
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <CustomTextFiled
              value={value}
              placeholder='Email'
              onChangeText={onChange}
              onBlur={onBlur}
              type='email-address'
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <CustomTextFiled
              value={value}
              placeholder='Mot de passe'
              onChangeText={onChange}
              onBlur={onBlur}
              password
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='confirmPassword'
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <CustomTextFiled
              value={value}
              placeholder='Confirmer le Mot de passe'
              onChangeText={onChange}
              onBlur={onBlur}
              password
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />

        {!!errors && Object.keys(errors).length > 0 && (
          <Text style={styles.textError}> Veuillez remplir tous les champs </Text>
        )}
        <CustomButton
          type='ACTIVE_PRIMARY'
          onPress={handleSubmit(onSignUp)}
          text='Créer un compte'
          size='LARGE'
        />
        <CustomButton
          type='TEXT_BUTTON_SECONDARY'
          onPress={onGoLogin}
          text='Se connecter'
          size='LARGE'
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  registerContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textError: {
    color: COLORS.WARNING_COLORS_FIRST,
    fontSize: FONTSIZE.INPUT_PROMPT,
    fontFamily: FONTFAMILY.SF_PRO,
    marginTop: 10,
    textAlign: 'center',
  },
});
