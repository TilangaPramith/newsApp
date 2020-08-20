import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { Home } from "./screens"
import store from './state/store';


export default App = () => {
  return (
    <Provider store = {store} >
      <Home/>
    </Provider>
  )
  
}


