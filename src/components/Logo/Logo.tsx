import {StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import {SIZE} from '../../constants/GLOBAL'
 
interface LogoProps {}
 
const Logo: FunctionComponent<LogoProps> = ({}) => {
return (

       <Image
            source={require('../../../assets/images/woof-logo.png')}
            style={styles.logoImg}
        />
 
 )
}
export default Logo
const styles = StyleSheet.create({
    logoContainer:{
        alignItems: 'center',
        height: 300,
        backgroundColor: 'red'
        


    },
    logoImg:{
        position: 'absolute' ,
        bottom: 100,
        width: 350,
        height: 350,
    }
})