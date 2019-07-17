/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component, useEffect,useState} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import {
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { red } from 'ansi-colors';
import loginSceen from './screens/login'

class Homescreen extends Component{
  static navigationOptions = {
    header : null
  }
  render(){
   return ( 
    <Text>Hello
        </Text>
   );
  }
}

const screens = createStackNavigator(
  { loginScreen: loginSceen,
    Home: Homescreen
  }
);

const AppContainer = createAppContainer(screens)

export default class App extends Component{
render(){
  return (
      <AppContainer/>
  );
}
}

const styles = StyleSheet.create({
  textBody :{
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#edebeb",
    borderColor: '#748fb0',
    borderWidth: 2,
  },
 text :{
  // flex: 2, 
  justifyContent: "center",
  color: 'black',
  fontWeight: 'bold',
  fontSize: 14,
  borderColor: 'black',
  width:250,
  height:45,
  borderWidth: 1,
  textAlign:"center",

 },

 button:{
  justifyContent: "center",
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 14,
  width:295,
  height:45,
  textAlign:"center",

 },

image:{
  position: 'absolute', 
  top: 0, 
  bottom: 0, 
  left: 0,
  right: 0
}
});

