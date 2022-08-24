import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/chatListItem';
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
// import styles from './style'


export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
           <FlatList
           style={{width:'100%'}} 
           data={ChatRooms} 
           renderItem={({item})=><ChatListItem 
           chatRoom={item}
           keyExtractor={(item)=>item.id}
           /> } />
           <NewMessageButton/>
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
