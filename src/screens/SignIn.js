import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";

import Input from '../component/InputCard/Input';
import Button from "../component/Button/Button";

import Lottie from 'lottie-react-native';


function SignIn({ navigation }) {

    const [userName, setUserName] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userPhoneNumber, setUserPhoneNumber] = useState(null);
    const [userPassword, setUserPassword] = useState(null);



    //TÜÜM ALANLARI DOLDURMAN GEREKTİĞNİ ÇALIŞTIRAN FONKSİYON GELECEK!





    return (
        <SafeAreaView style={styles.container}>

            <Lottie
                style={styles.lottie}
                source={require('../assets/logo.json')} autoPlay />
            <Text style={styles.header}>Kayıt Ol</Text>
            <Input
                placeholder="İsim"
                onChangeText={setUserName} />
            <Input
                placeholder="Email"
                onChangeText={setUserMail} />
            <Input
                placeholder="Telefon numarası "
                onChangeText={setUserPhoneNumber} />
            <Input
                placeholder="Şifre"
                onChangeText={setUserPassword} />
            <Button
                text="Kayıt ol" />
            <TouchableOpacity
                onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.text}>Hesabın var mı? Giriş Yap </Text>
            </TouchableOpacity>



        </SafeAreaView>

    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    lottie: {
        height: 259,
        left: 5,
    },
    header: {
        color: '#34670C',
        width: 92,
        height: 29,
        left: 24,
        //top: 294,
        //font family gelecek
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: 600,
    },
    text: {
        //font family eklencek
        width: 181,
        height: 17,
        left: 105,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        color: '#9C9C9C',

    },
})