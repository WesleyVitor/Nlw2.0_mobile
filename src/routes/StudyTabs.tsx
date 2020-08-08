import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/favorites';
const {Navigator,Screen} = createBottomTabNavigator();

function StudyTabs(){
    return(
        <Navigator
        tabBarOptions={{
            style:{
                elevation:0,
                shadowOpacity:0,
                height:46,
            },
            tabStyle:{
                flexDirection:'row',
                alignContent:'center',
                justifyContent:'center',
            },
            iconStyle:{
                flex:0,
                height:20,
                width:20,

            },
            labelStyle:{
                fontFamily:"Archivo_700Bold",
                fontSize:13,
                marginLeft:16,   
            },
            inactiveBackgroundColor:"#fafafc",
            activeBackgroundColor:"#ebebf5",
            inactiveTintColor:"#c1bccc",
            activeTintColor:"#32264d",
        }}
        >
            <Screen 
            name="TeacherList" 
            component={TeacherList} 
            options={{
                tabBarLabel:"Poffys",
                tabBarIcon:({color,size,focused})=>{
                    return (
                        <Icon name="ios-easel" color={focused ? "#8257e5" : color} size={size} />
                    )
                    
                }
            }}
            
            />
            <Screen 
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarLabel:"Favoritos",
                tabBarIcon:({color,size,focused})=>{
                    return (
                        <Icon name="ios-heart" color={focused ? "#8257e5" :color} size={size} />
                    )
                    
                }
            }} />
        </Navigator>
    );
}

export default StudyTabs;