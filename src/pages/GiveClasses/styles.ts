import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#8257E5",
        justifyContent:'center',
        flex:1,
        padding:40,
    },
    contant:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:32,
        lineHeight:37,
        maxWidth:180,
    },

    description:{
        marginTop:24,
        color:"#d4c2ff",
        fontSize:16,
        lineHeight:26,
        fontFamily:"Poppins_400Regular",
        maxWidth:240,
    },
    okButtton:{
        backgroundColor:'#04d361',
        height:58,
        marginVertical:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,

    },

    okButttonText:{
        color:'#FFF',
        fontSize:16,
        fontFamily:'Archivo_700Bold',

    }


});

export default styles;