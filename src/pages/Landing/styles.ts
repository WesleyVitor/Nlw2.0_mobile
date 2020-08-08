import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#8257E5",
        justifyContent:'center',
        flex:1,
        padding:40,
    },

    banner:{
        width:'100%',
        resizeMode:'contain',
    },

    title:{
        fontFamily:"Poppins_400Regular",
        fontSize:20,
        color:'#FFF',
        lineHeight:30,
        marginTop:40,
    },

    titleBold:{
        fontFamily:"Poppins_600SemiBold",
        fontWeight:'bold',
    },

    buttonsContainer:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
    },

    button:{
        justifyContent:'space-between',
        backgroundColor:'#333',
        height:150,
        width:'48%',
        borderRadius:8,
        padding:24,
    },

    buttonPrimary:{
        backgroundColor:'#9871F5',

    },

    buttonSecundary:{
        backgroundColor:'#04D361',
    },

    buttonText:{
        fontFamily:'Archivo_700Bold',
        fontSize:18,
        color:'#FFF',
    },

    totalConnections:{
        fontFamily:"Poppins_400Regular",
        fontSize:12,
        lineHeight:20,
        color:"#D4C2FF",
        maxWidth:140,
        marginTop:30,
        


    },

});

export default styles;