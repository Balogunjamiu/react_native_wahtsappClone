import React from "react";
import { View, Text, Image,
    TouchableWithoutFeedback } from "react-native";
import {User} from "../../types";
import styles from './style'
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Users from "../../data/Users";


export type ContactListItemProps = {
    user: User
}
  
// interface ImageProps {
//     source : ImageSourcePropType
// }

const ContactListItem =(props:ContactListItemProps)=>{
    const {user} = props

    const navigation = useNavigation()

    const onClick = ()=>{
            //navigate to chatroom
    }
return(
    <TouchableWithoutFeedback onPress={onClick}>

    <View style={styles.container}>

        <View style={styles.leftContainer}>
        <Image  source={{uri: user.imageUri}}  style={styles.avatar}/>
        <View style={styles.middleContainer}>
        <Text style={styles.username}>{user.name}</Text>
        <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
        </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
)

};

export default ContactListItem