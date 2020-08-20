import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Home from '../Home';
import Bookmarks from '../Bookmarks';


const Tab = createBottomTabNavigator();

const Root = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = "home";
              } else if (route.name === 'Bookmarks') {
                iconName = "bookmark";
              }
  
              // You can return any component that you like here!
              return <FeatherIcons name={iconName} size={size} color={color} />;
            },
          })}

            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Bookmarks" component={Bookmarks}/>
        </Tab.Navigator>
    )
}


export default Root;