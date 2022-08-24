/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { 
  FontAwesome,
   FontAwesome5, 
  MaterialIcons } from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View , ColorSchemeName, Pressable } from 'react-native';
import {Octicons,
   MaterialCommunityIcons,
    Fontisto} from '@expo/vector-icons'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoom';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, MainTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatScreen from '../screens/ChatScreen';
import ChatRooms from '../data/ChatRooms';
import ContactScreen from '../screens/ContactScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" 
      component={MainTabNavigator}
       options={{ 
          headerStyle:{
            backgroundColor:Colors.light.tint,
          },
          headerShadowVisible: false,
          headerTintColor:Colors.light.background,
          headerTitleAlign:'left',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          title:'whatsApp',
          headerRight:()=> (
            <View style={{
              flexDirection:'row',
              width:60,
              justifyContent:'space-between',
              marginRight:10
            }}>
                <Octicons name="search" size={22} color={'white'}  />
                <MaterialCommunityIcons size={22} name='dots-vertical' color={'white'}/>
            </View>
          )

        }} />
        <Stack.Screen name="ChatRoom" 
        component={ChatRoomScreen}
        options={({route}) =>({ 
          title:route.params.name,
          headerStyle:{
            backgroundColor:Colors.light.tint,
          },
          headerShadowVisible: false,
          headerTintColor:Colors.light.background,
          headerTitleAlign:'left',
          headerTitleStyle:{
            fontWeight:'bold',
          },

          headerRight:()=>(
            <View
            style={{
              flexDirection:'row',
              width:100,
              justifyContent:'space-between',
              marginRight:10
            }}  >
              <FontAwesome5 name="video" 
              size={22} color={'white'} />
              <MaterialIcons 
              name='call' size={22} 
              color={'white'} />
              <MaterialCommunityIcons 
              name="dots-vertical" 
              size={22} color={'white'} />
            </View>
          )
         })} />
         <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contact' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();


function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle:{
          backgroundColor: Colors[colorScheme].tint
        },
        tabBarIndicatorStyle:{
          backgroundColor: Colors[colorScheme].background,
          height:4
        },
        tabBarLabelStyle:{
          fontWeight:'bold'
        }
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Camera'>) => ({
          title: 'Camera',
           tabBarIcon: ({ color }) => <Fontisto  name='camera' color={color} size={18}/>,
           tabBarLabel:() => null
           
        })}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          title: 'Chats',
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: 'Status',
         
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: 'Calls',
         
        }}
      />
    </MainTab.Navigator>
  );
} 

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
