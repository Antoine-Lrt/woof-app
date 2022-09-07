import {StyleSheet ,Image, SafeAreaView, Text, View,} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react'
import CustomTextFiled from '../../components/CustomTextFiled/CustomTextFiled'
import CustomButton from '../../components/CustomButton/CustomButton';
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { COLORS, FONTFAMILY, FONTSIZE } from '../../constants/GLOBAL';
import Logo from '../../components/Logo/Logo';

 
interface LoginProps {}

type FormValues = {
    email: string;
    password: string;
}
 
const Login: FunctionComponent<LoginProps> = ({}) => {

    const validation = Yup.object({
        email: Yup.string().email("Veuillez saisir une adresse mail valide").required("Veuillez saisir une adresse mail"),
        password: Yup.string().min(8, "Veuillez saisir au moins 8 caractères").required("Veuillez saisir un mot de passe"),
    }).required();

    const {control, handleSubmit,clearErrors,formState: {errors} } = useForm<FormValues>({
        mode: "onBlur",
        resolver: yupResolver(validation)
    })

    const onSignIn = () => {
        clearErrors();
        console.warn("Create Account");
    };


return (
    <SafeAreaView>
    <StatusBar style="auto" />

        <Logo />
       <Controller control={control} name='email' render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
                <CustomTextFiled 
                    value={value}
                    placeholder="Email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={!!error}
                    errorDetails={error?.message}
                />
            )}/>
        <Controller control={control} name='password' render={({field:{onChange, value, onBlur},  fieldState: {error}}) => (
                <CustomTextFiled 
                    value={value}
                    placeholder="Mot de passe"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    password
                    error={!!error}
                    errorDetails={error?.message}
                />
        )}/>


            {!!errors && Object.keys(errors).length > 0 && (
                <Text style={styles.textError}> Identifiant ou Mot de pass incorrect ! </Text>
            )}
            <CustomButton type='ACTIVE_PRIMARY' onPress={handleSubmit(onSignIn)} text='Créer un compte' />
  
    </SafeAreaView>
 )
}
export default Login
const styles = StyleSheet.create({
    textError: {
        color: COLORS.WARNING_COLORS_FIRST, 
        fontSize: FONTSIZE.INPUT_PROMPT,
        fontFamily: FONTFAMILY.SF_PRO,
        marginTop: 10, 
        textAlign: 'center'
    },

})