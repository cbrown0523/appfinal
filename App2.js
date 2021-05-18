import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Services from "./components/Services";
import Nav from './components/Nav';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Nav />
      <Stack.Navigator initialRouteName="Home" 
        screenOptions= {{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey' 
          },
          headerTitleStyle :{
            fontWeight: 'bold',
          },
          headerTintColor: 'black',
        }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Blog" component={Blog} />  
          <Stack.Screen name="Experience" component={Experience} />
         <Stack.Screen name="Work" component={Work} />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="About" component={About} />




        </Stack.Navigator>
    <Drawer.Navigator initialRouteName= "Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Experience" component={Experience} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Work" component={Work} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
