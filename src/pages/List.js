import React, { useState, useEffect } from 'react';
import { SafeAreaView, AsyncStorage, StyleSheet,Text, Image } from 'react-native';

import logo from '../assets/logo.png';

export default function List(){
    const [ techs, setTechs ] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray)
        })
    }, [])

    return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <Text>{techs}</Text>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
});