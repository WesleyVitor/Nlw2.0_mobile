import React from 'react';
import { View, ImageBackground,Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';


function GiveClasses(){
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode="contain"  
            source={GiveClassesBgImage} 
            style={styles.contant}>

            <Text style={styles.title} >Quer Ser um Proffy?</Text>
            <Text style={styles.description}>
                Para Começar você precisa se cadastrar na nossa plataforma web
            </Text>
            </ImageBackground>
            <RectButton style={styles.okButtton} onPress={handleNavigateBack}>
                <Text style={styles.okButttonText}>Tudo Bem</Text>
            </RectButton>

        </View>
    );
}

export default GiveClasses;