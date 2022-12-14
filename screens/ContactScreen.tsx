import React,{ useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactListItem from '../components/ContactListItem';

import NewMessageButton from '../components/NewMessageButton';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
// import styles from './style'


export default function ContactScreen({ navigation }: RootTabScreenProps<'Chats'>) {
const [Users, setUsers] = useState([])


  useEffect(()=>{
    const fetchUser = async () =>{
      try{
        const userData = await API.graphql(
          graphqlOperation(
          listUsers
        ))
        setUsers(userData.data.listUsers.items)
      }catch(e){
        console.log(e)
      }
    }

    fetchUser()
  },[])


  return (
    <View style={styles.container}>
           <FlatList
           style={{width:'100%'}} 
           data={Users} 
           renderItem={({item})=><ContactListItem 
           user={item}
           keyExtractor={(item)=>item.id}
           /> } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
