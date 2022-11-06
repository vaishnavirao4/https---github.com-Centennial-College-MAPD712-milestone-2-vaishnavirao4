import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function FindPatient () {
  return (
    <ImageBackground source={require('../navigation/assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>FIND A PATIENT:</Text>
        <View style={styles.searchBar}>
          <TextInput 
            style= {styles.input}
            placeholder='Enter Patient Name/Id'>
          </TextInput>
          <TouchableOpacity style={styles.searchIcon}>
            <MaterialCommunityIcons name="account-search-outline" size={20} color="#414142" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.patientInfo}>
              <Text style= {styles.patientId}>PATIENT -</Text>
              <Text style={styles.patientName}>NAME</Text>
              <Text style={styles.textStyle}>AGE:</Text>
              <Text style={styles.textStyle}>WEIGHT:</Text>
              <Text style={styles.textStyle}>REPORT:</Text>
              <Text style={styles.textStyle}>ASSIGNED:</Text>
              <Text style={styles.textStyle}>ADDMITED ON:</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.patientInfo}>
              <Text style= {styles.patientId}>PATIENT - </Text>
              <Text style={styles.patientName}>NAME</Text>
              <Text style={styles.textStyle}>AGE:</Text>
              <Text style={styles.textStyle}>WEIGHT:</Text>
              <Text style={styles.textStyle}>REPORT:</Text>
              <Text style={styles.textStyle}>ASSIGNED:</Text>
              <Text style={styles.textStyle}>ADDMITED ON:</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.patientInfo}>
              <Text style= {styles.patientId}>PATIENT - </Text>
              <Text style={styles.patientName}>NAME</Text>
              <Text style={styles.textStyle}>AGE:</Text>
              <Text style={styles.textStyle}>WEIGHT:</Text>
              <Text style={styles.textStyle}>REPORT:</Text>
              <Text style={styles.textStyle}>ASSIGNED:</Text>
              <Text style={styles.textStyle}>ADDMITED ON:</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.patientInfo}>
              <Text style= {styles.patientId}>PATIENT - </Text>
              <Text style={styles.patientName}>NAME</Text>
              <Text style={styles.textStyle}>AGE:</Text>
              <Text style={styles.textStyle}>WEIGHT:</Text>
              <Text style={styles.textStyle}>REPORT:</Text>
              <Text style={styles.textStyle}>ASSIGNED:</Text>
              <Text style={styles.textStyle}>ADDMITED ON:</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  heading: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 31,
    color: '#414142',
  },

  searchBar: {
    flexDirection: 'row',
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 2,
    height: 46,
    width: 320,
    borderRadius: 10,
  },

  input: {
    color: '#414142',
    paddingLeft: 14,
    width: 280,
  },

  searchIcon: {
    paddingTop: 10,
    paddingLeft: 0,
  },

  patientInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    height: 160,
    width: 360,
    borderRadius: 10,
    paddingLeft: 14,
    paddingTop: 6,
  },

  patientId: {
    textDecorationLine: 'underline',
    marginTop: 5,
    color: '#414142',
    fontWeight: 'bold',
  },

  patientName: {
    marginTop: 3,
    color: '#414142',
    fontWeight: 'bold',
  },

  textStyle: {
    marginTop: 3,
    color: '#414142',
  },
});
