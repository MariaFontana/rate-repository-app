import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { ScreenStack } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './Components/Redux/store'
import { ILogin } from './Components/ILogin';
import Register from './Components/Register';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login}/>
      <Tab.Screen name="Register" component={Register}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


