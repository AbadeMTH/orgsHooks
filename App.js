import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/Telas/Home';

export default function App(){
  return(
    <SafeAreaView>
      <StatusBar/>
      <Home/>
    </SafeAreaView>
  );
}