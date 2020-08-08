import React, { useState } from 'react';
import { View, Image,Text,Linking } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher{
    id:number;
    avatar:string;
    bio:string;
    cost:number;
    name:string;
    subject:string;
    whatsapp:string;
}
//Esta função assume as propriedades de Teacher
export interface TeacherItemProps{
    teacher:Teacher;
    favorited:boolean;
}

//Esta função assume as propriedades de TeacherItemProps
const TeacherItem:React.FC<TeacherItemProps>=({teacher,favorited})=>{

    const [isFavorited,setIsFavorited] = useState(favorited);

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?text=Hello ${teacher.name}&phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        //Pega a string com todos os favoritos que estão no item 'favorites'
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritedArray = [];
        
        //Transforma a string em um array
        if(favorites){
            favoritedArray = JSON.parse(favorites);
        }

        //-----------------------------------------
        if(isFavorited){
            //remover dos favoritos

            //Verifica cada elemento do array para saber se bate com o id do professor atual
            const favoriteIndex = favoritedArray.findIndex((teacherItem:Teacher)=>{
                return teacherItem.id == teacher.id;
            });
            
            favoritedArray.slice(favoriteIndex,1);
            setIsFavorited(false);


        }else{
            //adcionar aos favoritos
            

            //Adicona o professor específico que estar neste component ao array 
            favoritedArray.push(teacher);

            setIsFavorited(true);

            //transforma em string o array e adiciona ao asyncStorage
            
        }
        await AsyncStorage.setItem('favorites',JSON.stringify(favoritedArray));

    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{uri:teacher.avatar}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>

                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue} >R$ {teacher.cost}</Text> 
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton 
                    onPress={handleToggleFavorite}
                    style={
                        [styles.favoriteButton,
                        
                         isFavorited ? styles.favorited : {}]}>
                        { isFavorited 
                            ? <Image source={unFavoriteIcon} />
                            : <Image source={heartOutlineIcon} />

                        }
                      
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText} >Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    )
}

export default TeacherItem;