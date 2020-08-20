import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { Home, Root } from "./screens"
import store from './state/store';

//const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <Provider store = {store} >
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </Provider>
  )
  
}


