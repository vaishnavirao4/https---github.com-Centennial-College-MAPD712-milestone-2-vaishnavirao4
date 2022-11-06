import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function MonitorRecords () {
  return (
    <ImageBackground source={require('../navigation/assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>MONITOR RECORDS:</Text>
        <Text style={styles.numberLabel}>ENTER PATIENT NO.:</Text>
        <View style={styles.searchBar}>
          <TextInput 
            style= {styles.input}
            placeholder='101101'>
          </TextInput>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#414142" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.recordInfo}>
            <Text style= {styles.patientId}>PATIENT - 101101</Text>
            <Text style={styles.patientName}>RICHARD LOUIS</Text>
            <Text style={styles.textStyle}>AGE: 35 / MALE</Text>
            <Text style={styles.textStyle}>WEIGHT: 75 KG</Text>
            <Text style={styles.textStyle}>BLOOD PRESSURE: 120/75mm HG</Text>
            <Text style={styles.textStyle}>RESPIRATORY RATE: 18 breaths/min</Text>
            <Text style={styles.textStyle}>BLOOD OXYGEN LEVEL: 85mm HG</Text>
            <Text style={styles.textStyle}>HEARTBEAT RATE: 125 beats/min</Text>
            <Text style={styles.textStyle}>REQUIRED TESTS:</Text>
            <Text style={styles.textStyle}>   
              *BLOOD SUGAR LEVEL →
              <Text style={styles.testStatus}> Pending</Text>
            </Text>
            <Text style={styles.textStyle}>   
              *XRAY →
              <Text style={styles.testStatus}> Completed</Text>
            </Text>
            <Text style={styles.textStyle}>REPORT: LEFT KNEE FRACTURE</Text>
            <Text style={styles.textStyle}>ADDMITED ON: 03/OCT/2022 - 03:55PM</Text>
            <Text style={styles.textStyle}>ASSIGNED ROOM: WARD A - 2nd FLOOR - ROOM# A202</Text>
            <Text style={styles.textStyle}>LAST UPDATED: 05/OCT/2022 - 12:55PM</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style= {{color: '#D4DF38'}}>ADD TESTS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style= {{color: '#D4DF38'}}>ADD/UPDATE INFO</Text>
              </TouchableOpacity>
            </View>
          </View>
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

  numberLabel: {
    marginLeft: 13,
    marginTop: 26,
  },

  searchBar: {
    flexDirection: 'row',
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 10,
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
  
  recordInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    height: 490,
    width: 360,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 15,
  },

  patientId: {
    textDecorationLine: 'underline',
    marginTop: 8,
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 21,  },

  patientName: {
    marginTop: 5,
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 20,
  },

  textStyle: {
    marginTop: 5,
    color: '#414142',
    fontSize: 15,
    fontWeight: 'bold',
  },

  testStyle: {
    flexDirection: 'row'
  },

  testStatus: {
    marginTop: 5,
    color: 'red'
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonStyle: {
    backgroundColor: '#414142',
    borderWidth: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 135,
    height: 45,
    textAlign: 'center',
  },
});
