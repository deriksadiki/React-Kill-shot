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

 class loginSceen extends Component{
    static navigationOptions = {
        header : null
      }
  state = {
    email: '',
    password: ''
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = () => {
        if (this.state.email == '')
        Alert.alert('Please enter your Email Address')
        else if (this.state.password == '')
        Alert.alert('Please enter your Password')
        else
        this.props.navigation.navigate('Home');
 }

render(){
  return (
      //<ImageBackground source={imag} style={styles.image}>
      <View style={styles.textBody}>
        <TextInput style={styles.text} placeholder="Email" onChangeText={this.handleEmail}>
        </TextInput>
        <Text>
        </Text>
        <TextInput style={styles.text} placeholder="Password" onChangeText={this.handlePassword} ></TextInput>
        <Text>
        </Text>
        <View style={styles.button}>
        <Button color="black" title="Sign In"  onPress = {this.login}/>
        </View>
        </View>
     
       // </ImageBackground>
  );
}
}

export default loginSceen;

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


