import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginPage from './navigation/loginPage';
import homePage from './navigation/homePage';
import addPatient from './navigation/addPatient';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginPage">
        <Stack.Screen
          name="loginPage"
          component={loginPage}
          options={{
            title: 'Helping Hands', //Set Header Title
            headerStyle: {
              backgroundColor: '#f3e0fb', //Set Header color
            },
            headerTintColor: '#4a5e74', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

<Stack.Screen
          name="homePage"
          component={homePage}
          options={({ navigation }) => ({
            title: "Welcome", //Set Header Title
            headerStyle: {
              backgroundColor: '#f3e0fb', //Set Header color
            },
            headerTintColor: '#4a5e74', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
              <MaterialCommunityIcons name="addPatient" style={styles.icon} size={30} onPress={() => navigation.navigate("addPatient")} />
            ),

          })}
        />
        <Stack.Screen
          name="addPatient"
          component={addPatient}
          options={{
            title: 'Add Patient', //Set Header Title
            headerStyle: {
              backgroundColor: '#f3e0fb', //Set Header color
            },
            headerTintColor: '#4a5e74', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
           </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    marginRight: 10,
  },
});