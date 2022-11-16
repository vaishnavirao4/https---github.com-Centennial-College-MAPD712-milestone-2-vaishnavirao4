import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, StatusBar, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Button, ScrollView } from 'react-native';



export default function App() {

   return(
    <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text1}>Welcome</Text>

           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("addPatient")}>
                <Text style={styles.btntext}>Add Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("addPatient")}>
                <Text style={styles.btntext}>View Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("addPatient")}>
                <Text style={styles.btntext}>List All Patient</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            <Text style={styles.text2}>Upcoming Appointments</Text>
           
            <Text style={styles.text2}>Date:</Text>
      <TextInput style={styles.textinput} placeholder="Enter date"></TextInput>
      <Text style={styles.text2}>Time:</Text>
      <TextInput style={styles.textinput} placeholder="Enter time"></TextInput>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("addPatient")}>
                <Text style={styles.btntext}>Log Out</Text>
            </TouchableOpacity>
            
       
        </View>



   )
  };
  const styles = StyleSheet.create({
    container: {
    backgroundColor: '#f3e0fb',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

  text1: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4a5e74',
  },

  text2: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4a5e74',
  },

  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  icon: {
    color: '#4a5e74',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 82, 
  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: '#E5E4E2',
    borderColor: 'lightgrey',
    borderWidth: 1
  },

  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    backgroundColor: '#ffd5d3',
    marginTop: 20,
    borderRadius: 22,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 22,
},
btntext: {
    color: '#4a5e74',
    fontSize: 18,
    fontWeight: 'bold',
    
},
});