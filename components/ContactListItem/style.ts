import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10
    },
    leftContainer:{
        flexDirection:'row'
    },
    middleContainer:{
        justifyContent:'space-around'
    },
    username:{
        fontWeight:'bold',
        fontSize:16
    },
    status:{
        fontSize: 16,
        width:'100%',
        color: 'grey'
    },
    time:{
        fontSize: 14,
        color: 'grey',
    },
    avatar:{
        width: 60,
        height: 60,
        marginRight:10,
        borderRadius:50
    }
    })

export default styles