import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#8257e5'
    },
    topBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        fontFamily:"Archivo_700Bold",
        fontSize:24,
        color:'#FFF',
        lineHeight:32,
        maxWidth:160,
        marginVertical:15,
    },

    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },


});

export default styles;