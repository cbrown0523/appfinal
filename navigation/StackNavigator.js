import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import About from "../components/About";
import Home from "../components/Home";
import Contacts from "../components/Contacts";
import Blog from "../components/Blog";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Services from "../components/Services";
import Nav from '../components/Nav';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey' 
          },
          
       paddingBottom :120,
          headerTitleStyle :{
            fontWeight: 'bold',
          },
          headerTintColor: 'black',
        };

const StackNavigator = ()  =>{
  return (

      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Blog" component={Blog} />  
          <Stack.Screen name="Experience" component={Experience} />
         <Stack.Screen name="Work" component={Work} />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
        );
    };

    const HomeStackNavigator = () => {
      return (
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={screenOptionStyle}>
          <Stack.Screen name="Home" component={Home} />          

        </Stack.Navigator>
      );
    };
    const ContactStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Contact" component={Contacts} />          

        </Stack.Navigator>
      );
    };
    const BlogStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Blog" component={Blog} />          

        </Stack.Navigator>
      );
    };
    const ExperienceStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Experience" component={Experience} />          

        </Stack.Navigator>
      );
    };
    const WorkStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Work" component={Work} />          

        </Stack.Navigator>
      );
    };
    const ServicesStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Services" component={Services} />          

        </Stack.Navigator>
      );
    };
    const AboutStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="About" component={About} />          

        </Stack.Navigator>
      );
    };
    
    
    export {HomeStackNavigator, AboutStackNavigator, WorkStackNavigator, StackNavigator, ContactStackNavigator ,  BlogStackNavigator, ExperienceStackNavigator, ServicesStackNavigator};