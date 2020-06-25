import React from "react";
import {decode, encode} from 'base-64'
import {Provider as ModalProvider} from "react-native-paper"
import AppNavigation from "./navigations/appNavigations"
import {store} from "./store/rootReducers"
import {Provider as ReduxProvider} from "react-redux"

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
 
  

  return (
     <ReduxProvider store={store} >
    <ModalProvider>
    <AppNavigation/>
    </ModalProvider>
     </ReduxProvider>
  );
}