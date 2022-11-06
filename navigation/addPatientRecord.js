import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default function AddPatients ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>ADD PATIENT RECORD:</Text>
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
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>HEIGHT:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 6.0feet'>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>WEIGHT:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 75KG'>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>BLOOD PRESSURE:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 120/75mm HG'>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>RESPIRATORY RATE:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 18breaths/min'>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>BLOOD OXYGEN LVL:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 85mm HG'>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>HEARTBEAT RATE:</Text>
              <TextInput 
                style={styles.input2} 
                placeholder='e.g 125beats/min'>
              </TextInput>
            </View>
          </View>
          <Text style={styles.inputLabel}>PATIENT's ALLERGIES:</Text>
          <TextInput 
            style={styles.input1}
            placeholder='i.e. Food, Latex, Mold etc'>
          </TextInput>
          <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style= {{color: '#414142'}}>PA FORM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style= {{color: '#414142'}}>HOME</Text>
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
    marginTop: 15,
    color: '#414142',
    fontWeight: '700',
  },

  input1: {
    borderWidth: 0.9,
    width: 350,
    height: 45,
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
    height: 45,
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
    marginTop: 0,
  },

  buttonStyle: {
    marginTop: 50,
    backgroundColor: '#D4DF38',
    borderWidth: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 45,
    borderColor: '#D4DF38',
  },
});
