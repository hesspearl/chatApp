import React from "react";
import {decode, encode} from 'base-64'
import {Text}from "react-native"
import {Provider as ModalProvider,} from "react-native-paper"
import AppNavigation from "./navigations/appNavigations"
import {store} from "./store/rootReducers"
import {Provider as ReduxProvider} from "react-redux"
import {Inter_900Black  } from '@expo-google-fonts/inter';
import { useFonts, Piedra_400Regular} from '@expo-google-fonts/piedra';
import {AppLoading} from "expo"

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  let [fontLoad]=useFonts({
   "Inter":Inter_900Black ,
 "Piedra":Piedra_400Regular
  })
  
  

  if(!fontLoad){
    return<AppLoading/>
  }else{
  return (
     <ReduxProvider store={store} >
    <ModalProvider>
    <AppNavigation/>
    </ModalProvider>
     </ReduxProvider>
  );}
}