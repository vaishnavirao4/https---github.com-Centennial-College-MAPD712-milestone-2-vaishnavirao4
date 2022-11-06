import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView, } from 'react-native';
import Svg from 'react-native-svg';

export default function App() {
  return (  
      <View style={styles.container}>
        
        <View style={styles.image}>
        <Image source={require('../Cent_Care/assets/Doc.png')}/>
        </View>
    
        <Text style={styles.heading}> Welcome to</Text>
        <Text style={styles.heading1}>CENTENNIAL CARE</Text>
    

        <View style={styles.inputStyle}>
        <Text styel={styles.heading3}> Log in below </Text>
      
          <TextInput 
                style={styles.input2} 
                placeholder='Username'>
          </TextInput>
      
          <TextInput 
                style={styles.input2} 
                placeholder='Password'>
          </TextInput>
        </View>

        <View>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text>Log in</Text>
              </TouchableOpacity>
        </View>

       <StatusBar style="auto" />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFD3',
  },


  heading: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'center',
    color: '#414142',
  },

  image: {
    marginTop: 80,
    fontSize: 18,
    alignSelf: 'center',
    color: '#414142',
  },


  heading1: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 28,
    color: '#414142',
  },


  heading3: {
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#414142',
  },

  input2: {
    borderWidth: 0.9,
    width: 327,
    height: 56,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 100,
    backgroundColor: '#ECEDF0',
    color: '#414142',
    paddingLeft: 15,
    padding: 5,
  },

  inputStyle: {
    marginTop: 80,
    flexDirection: 'column',
    padding: 16,
    flex: 0.5,
    justifyContent: 'space-evenly',
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderWidth: 0.9,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: 327,
    height: 56,
    borderColor: '#D4DF38',
  },
});
