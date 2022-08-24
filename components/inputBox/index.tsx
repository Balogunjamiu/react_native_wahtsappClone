import React, { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity  } from "react-native";
import { FontAwesome5,
    Entypo,
     MaterialCommunityIcons,
     Fontisto,
     MaterialIcons
     } from "@expo/vector-icons";

const InputBox = ()=>{


    const [message, setMessage] = useState('');

    const onMicrophonePress =()=>{
        console.log('microphone')
    }
    const onSendPress =()=>{
        console.log(`${message}`)
        setMessage('')
    }

    const onPress =()=>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <FontAwesome5 name='laugh-beam' size={24} color='grey' />
            <TextInput 
            multiline
            style={styles.textInput}
            value={message}
            placeholder='Type a message'
            onChangeText={setMessage}
            />
            <Entypo name='attachment' size={24} style={styles.icons} color='grey' />
            {!message && 
            <Fontisto name="camera" size={24} style={styles.icons} color='grey' />
            }
            </View>

                <TouchableOpacity 
                onPress={onPress}
                >
            <View style={styles.buttonContainer}>
                {!message?
                <MaterialCommunityIcons name="microphone" size={28} color="white" /> 
                : 
                <MaterialIcons name="send" size={28} color="white" />
            }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox