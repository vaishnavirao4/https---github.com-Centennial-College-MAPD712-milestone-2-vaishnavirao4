import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Button, ScrollView } from 'react-native';


export default function Menu ({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../navigation/assets/background_image.png')} style={styles.container2}>
      <View style={styles.container1}>
        <View style={styles.image}> 
          <Image source={require('../navigation/assets/avatar.png')}/>
            <View>
              <Text style={styles.text1}>Good Morning! </Text>
              <Text style={styles.text2}>Dr. David Mason </Text>
            </View>
        </View>
        
        <View style={styles.image2}> 
          <Image source={require('../navigation/assets//hru.png')}/>
        </View>
    </View>

    <View style={styles.buttonGroup1}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('AddPatientsScreen')}>
                <Text style= {{color: '#414142'}}>ADD PATIENTS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('FindPatientScreen')}>
                <Text style= {{color: '#414142'}}>VIEW PATIENTS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('MonitorRecordScreen')}>
                <Text style= {{color: '#414142'}}>MONITOR RECORDS</Text>
              </TouchableOpacity>        
    </View>


    <View style={styles.buttonGroup2}>
              <TouchableOpacity
                style={styles.buttonStyle2}
                onPress={() => navigation.navigate('CriticalPatientsScreen')}>
                <Text style= {{color: '#414142'}}>CRITICAL PATIENTS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle2}
                onPress={() => navigation.navigate('addPatientRecord')}>
                <Text style= {{color: '#414142'}}>PATIENT RECORDS</Text>
              </TouchableOpacity>   


    </View>




    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container1: {
    marginTop: 10,
    flex: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: "black",
  },

  container2: {
    flex: 1,
    backgroundColor: '#FCFFD3',
  },

  heading: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 31,
    color: '#414142',
  },

  text1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
    color: '#BBC71C',
  },

  text2: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 32,
    color: '#BBC71C',
  },

  image: {
    marginTop: 40,
    marginLeft: 20,
    flexDirection: 'row',
  },

  image2: {
    marginTop: 40,
    alignSelf: 'center',
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

  
  buttonGroup1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 200,
  },

  buttonGroup2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderColor: '#D4DF38',
  },


  buttonStyle2: {
    backgroundColor: '#D4DF38',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 100,
    borderColor: '#D4DF38',
  },

});
