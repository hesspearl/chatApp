import React from "react";
import {decode, encode} from 'base-64'
import {Text}from "react-native"
import {Provider as ModalProvider,} from "react-native-paper"
import AppNavigation from "./navigations/appNavigations"
import {store} from "./store/rootReducers"
import {Provider as ReduxProvider} from "react-redux"
import { useFonts,Inter_900Black  } from '@expo-google-fonts/inter';
import {  Piedra_400Regular} from '@expo-google-fonts/piedra';
import {AppLoading} from "expo"

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  let [fontLoad]=useFonts({
    Inter_900Black ,
 Piedra_400Regular
  })
  
  console.log(fontLoad)

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