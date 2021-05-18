import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import DrawerNavigator from './navigation/DrawerNavigator';
import Nav from './components/Nav';


 const App = () => {
  return ( 
    
  <NavigationContainer>
      <Nav />
      <DrawerNavigator />
  </NavigationContainer>
  );
  }
export default App;
