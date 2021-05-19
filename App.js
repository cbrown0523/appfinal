// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function HomeStackNavigator({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: 'black', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function AboutStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About', 
          
        }}/>
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          title: 'Blog', 
        }}/>
    </Stack.Navigator>
  );
}
function BlogStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Blog"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          title: 'Blog', 
          
        }}/>
       <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contacts', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}
function ContactStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contacts', 
          
        }}/>
      <Stack.Screen
        name="Experience"
        component={Experience}
        options={{
          title: 'Experience', 
        }}/>
    </Stack.Navigator>
  );
}
function ExperienceStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Experience"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Experience"
        component={Experience}
        options={{
          title: 'Experience', 
          
        }}/>
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: 'Services', 
        }}/>
    </Stack.Navigator>
  );
}
function ServicesStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Services"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: 'Services', 
          
        }}/>
      <Stack.Screen
        name="Work"
        component={Blog}
        options={{
          title: 'Work', 
        }}/>
    </Stack.Navigator>
  );
}
function WorkStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Work"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'grey', 
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Work"
        component={Work}
        options={{
          title: 'Work', 
          
        }}/>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home', 
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Nav />
      <Drawer.Navigator>
     <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="About" component={ AboutStackNavigator} />
         <Drawer.Screen name="Services" component={ ServicesStackNavigator} />
      <Drawer.Screen name="Experience" component={ ExperienceStackNavigator} />
      <Drawer.Screen name="Work" component={ WorkStackNavigator} />
      <Drawer.Screen name="Blog" component={BlogStackNavigator} />
<Drawer.Screen name="Contacts" component={ContactStackNavigator} />

    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;