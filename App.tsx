import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {withAuthenticator} from 'aws-amplify-react-native'

import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import awsconfig from './src/aws-exports'
import { useEffect } from 'react';
Amplify.configure(awsconfig)

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg'
]

 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = ()=>{
        return randomImages[Math.floor(Math.random() * randomImages.length)]
  }
  useEffect(()=>{
      const fetchUser = async () =>{
        // get authenticated user from auth
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
        
        // console.log(userInfo)

        if(userInfo){
          // get user from backend with the user sub id from the auth
            const userData = await
             API.graphql(graphqlOperation(
              getUser,
              {id: userInfo.attributes.sub},
              ))

              if(userData.data.getUser){
                console.log('user is already registerin database')
                return
              }
              
                const newUser ={
                  id:userInfo.attributes.sub,
                  name:userInfo.username,
                  imageUri:getRandomImage(),
                  status:"Hey, i am using whatsapp",
                }
                
                console.log(newUser)
              await API.graphql(graphqlOperation(
                createUser,
                {input: newUser}
              ))
              
        }
        // get the user from the backend with user Id from auth

        // if there is no user in BD with the id, then create on
        
      }

      fetchUser()
  }, [])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)