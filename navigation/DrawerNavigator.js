import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from "../components/About";
import Home from "../components/Home";
import Contacts from "../components/Contacts";
import Blog from "../components/Blog";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Services from "../components/Services";

import { ContactStackNavigator} from "./StackNavigator";
import { BlogStackNavigator} from "./StackNavigator";
import { ExperienceStackNavigator} from "./StackNavigator";
import { WorkStackNavigator} from "./StackNavigator";
import { ServicesStackNavigator} from "./StackNavigator";
import { AboutStackNavigator} from "./StackNavigator";
import { HomeStackNavigator} from "./StackNavigator";



const Drawer = createDrawerNavigator();

export default function DrawNavigator() {
  return (
       
    <Drawer.Navigator>
     <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="About" component={ AboutStackNavigator} />
         <Drawer.Screen name="Services" component={ ServicesStackNavigator} />
      <Drawer.Screen name="Experience" component={ ExperienceStackNavigator} />
      <Drawer.Screen name="Work" component={ WorkStackNavigator} />
      <Drawer.Screen name="Blog" component={ BlogStackNavigator} />
<Drawer.Screen name="Contacts" component={ContactStackNavigator} />

    </Drawer.Navigator>
  );
}
