import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView, } from 'react-native';
import Svg from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './navigation/Homepage';
import addPatientRecord from './navigation/addPatientRecord';
import patientAdditionForm from './navigation/patientAdditionForm';
import AddPatientsScreen from './navigation/AddPatientsScreen';
import CriticalPatientsScreen from './navigation/CriticalPatientsScreen';
import MonitorRecordScreen from './navigation/MonitorRecordScreen'
import FindPatientScreen from './navigation/FindPatientScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (  

    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Homepage'>
        <Stack.Screen name='Homepage' component={Homepage}/>
        <Stack.Screen name='AddPatientsScreen' component={AddPatientsScreen}/>
        <Stack.Screen name='addPatientRecord' component={addPatientRecord}/>
        <Stack.Screen name='CriticalPatientsScreen' component={CriticalPatientsScreen}/>
        <Stack.Screen name='MonitorRecordScreen' component={MonitorRecordScreen}/>
        <Stack.Screen name='patientAdditionForm' component={patientAdditionForm}/>
       <Stack.Screen name='FindPatientScreen' component={FindPatientScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
      
  );
}


