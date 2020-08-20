import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../Home';
import Bookmarks from '../Bookmarks';


const Tab = createBottomTabNavigator();

const Root = () => {
    return (
        <Tab.Navigator
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