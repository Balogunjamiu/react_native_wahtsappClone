import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import { FlatList, ImageBackground } from "react-native";
import BG from '../data/BG.png'
import ChatRoomData from '../data/Chats'
import InputBox from "../components/inputBox";

const  ChatRoomScreen=()=>{

    const route = useRoute()
    
    return(
        <ImageBackground 
    style={{width:'100%', height:'100%'}}
        source={BG}
        >
       <FlatList
       
       data={ChatRoomData.messages}
       renderItem={({item})=> 
       <ChatMessage message={item} 
       inverted
       />}
       />

       <InputBox />
       </ImageBackground>
    )
}

export default ChatRoomScreen
