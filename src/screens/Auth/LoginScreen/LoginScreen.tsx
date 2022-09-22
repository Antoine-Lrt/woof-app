import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import CustomTextFiled from '../../../components/CustomTextFiled/CustomTextFiled';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../../constants/GLOBAL';
import Logo from '../../../components/Logo/Logo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../../Navigation/RootNavigator';

interface LoginScreenProps {
  email: string;
  password: string;
}

const LoginScreen: FunctionComponent = ({}) => {
  // FORM
  const validation = Yup.object({
    email: Yup.string()
      .email('Veuillez saisir une adresse mail valide')
      .required('Veuillez saisir une adresse mail'),
    password: Yup.string()
      .min(8, 'Veuillez saisir au moins 8 caractères')
      .required('Veuillez saisir un mot de passe'),
  }).required();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<LoginScreenProps>({
    mode: 'onBlur',
    resolver: yupResolver(validation),
  });

  const onSignIn = () => {
    clearErrors();
    navigation.navigate('TabBar');
    console.log('Create Account');
  };

  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onCreateAccount = () => {
    clearErrors();
    navigation.navigate('Register');
    console.log('Go to Login');
  };

  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <View style={styles.loginContainer}>
        <Logo widthSize={350} heightSize={350} />
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <CustomTextFiled
              value={value}
              placeholder='Email'
              onChangeText={onChange}
              onBlur={onBlur}
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

        {!!errors && Object.keys(errors).length > 0 && (
          <Text style={styles.textError}> Identifiant ou Mot de pass incorrect ! </Text>
        )}
        <CustomButton
          size='LARGE'
          type='ACTIVE_PRIMARY'
          onPress={handleSubmit(onSignIn)}
          text='Se connecter'
        />

        <CustomButton
          size='LARGE'
          type='TEXT_BUTTON_SECONDARY'
          onPress={onCreateAccount}
          text='Pas de compte ? Créer un compte'
        />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
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
