import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactListItem from '../components/ContactListItem';
import Users from '../data/Users'
import NewMessageButton from '../components/NewMessageButton';
// import styles from './style'


export default function ContactScreen({ navigation }: RootTabScreenProps<'Chats'>) {
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
