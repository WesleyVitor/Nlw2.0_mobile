import React, { useState, useEffect } from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
//Importação do Botão de se adequa com o seu OS
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

import styles from './styles';
function Landing(){
    const {navigate} = useNavigation();
    const [totalConnections,setTotalConnections] = useState();

    useEffect(()=>{
        api.get("connections").then((response)=>{
            const { total } = response.data;
            setTotalConnections(total)
        })
        .catch((err)=>{
            console.log('eroou')
        })
    },[])




    function handleNavigateToGiveClassesPage(){
        navigate("GiveClasses");
    }

    function handleNavigateToStudyPage(){
        navigate('Study');
    }


    return(
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja Bem vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja Fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button,styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPage}
                    >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText} >Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button,styles.buttonSecundary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={HeartIcon} />

            </Text>


        </View>
    );
      

    
}

export default Landing;