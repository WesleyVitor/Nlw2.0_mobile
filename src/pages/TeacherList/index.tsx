import React, { useState, useEffect } from 'react';
import { View,ScrollView,Text,TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';


import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import api from '../../services/api';

function TeacherList(){
    const [isFilterVisible,setIsFilterVisible] = useState(false);
    const [subject,setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time,setTime] = useState('');
    const [favorites,setFavorites] = useState<number[]>([]);
    
    const [teachers,setTeachers] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then((response)=>{
            //response:string
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher)=>{
                    return teacher.id
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }
   


    async function handleSubmitFilter(){
        loadFavorites()
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        });
        setIsFilterVisible(false)
        setTeachers(response.data);
        

    }


    function handleChangeFiltersVisible(){
        setIsFilterVisible(!isFilterVisible);
    }

    return(
        <View style={styles.container}>
            <PageHeader 
            
            title="Poffys Disponíveis" 
            headerRight={(
                <BorderlessButton onPress={handleChangeFiltersVisible}>
                    <Icon name="filter" color="#FFF" size={28} />
                </BorderlessButton>

            )}>
                {
                    isFilterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                    placeholder="Qual a matéria?"
                    value={subject}
                    onChangeText={(text)=>setSubject(text)}
                    style={styles.input}
                    placeholderTextColor="#c1bccc"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput 
                            placeholder="Qual a semana?"
                            value={week_day}
                            onChangeText={(text)=>setWeek_day(text)}
                            style={styles.input}
                            placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                            placeholder="Qual o Horário?"
                            value={time}
                            onChangeText={(text)=>setTime(text)}
                            style={styles.input}
                            placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton onPress={handleSubmitFilter} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
                
            </PageHeader>

            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16,
            }}
            >

            {teachers.map((teacher:Teacher)=>{
                return (
                    <TeacherItem 
                    key={teacher.id} 
                    teacher={teacher} 
                    favorited={favorites.includes(teacher.id)}/>
                );
            })}
            
            </ScrollView>
            
        </View>
    );
}

export default TeacherList;