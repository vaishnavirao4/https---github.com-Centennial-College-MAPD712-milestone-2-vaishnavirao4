import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default function AddPatients ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>PATIENT ADDITION FORM:</Text>
        <ScrollView>
          <Text style={styles.inputLabel}>PATIENT ID:</Text>
          <TextInput style={styles.input1}> PTN - 101101</TextInput>

          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>FIRST NAME:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g Richard'>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>LAST NAME:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g Louis'>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>AGE:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 35'>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>GENDER:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='i.e Male/Female'>
              </TextInput>
            </View>
          </View>

          <Text style={styles.inputLabel}>CONTACT NUMBER:</Text>
          <TextInput 
            style={styles.input1}
            placeholder='+1-xxx-xxx-xxxx'>
          </TextInput>

          <Text style={styles.inputLabel}>ADDRESS:</Text>
          <TextInput 
            style={styles.input3}
            placeholder='e.g 200 Ellesmere Road, M1H2L2, Toronto, ON'>
          </TextInput>

          <Text style={styles.inputLabel}>EMERGENCY CONTACT NUMBER:</Text>
          <TextInput 
            style={styles.input1}
            placeholder='+1-xxx-xxx-xxxx'>
          </TextInput>

          <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('addPatientRecord')}>
                <Text style= {{color: '#414142'}}>EDIT DETAILS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style= {{color: '#414142'}}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFD3',
  },

  heading: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 31,
    color: '#414142',
  },

  inputLabel: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#414142',
    fontWeight: '700',
  },

  input1: {
    borderWidth: 0.9,
    width: 350,
    height: 56,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#D4DF38',
    color: '#414142',
    paddingLeft: 5,
  },


  input3: {
    borderWidth: 0.9,
    width: 350,
    height: 80,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#D4DF38',
    color: '#414142',
    paddingLeft: 5,
  },

  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  input2: {
    borderWidth: 0.9,
    width: 165,
    height: 56,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#D4DF38',
    color: '#414142',
    paddingLeft: 5,
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderWidth: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 56,
    borderColor: '#D4DF38',
  },
});
