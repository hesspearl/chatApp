import React from "react";
import {decode, encode} from 'base-64'
import {Provider} from "react-native-paper"
import AppNavigation from "./navigations/appNavigations"



if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
 

  return (
    <Provider>
    <AppNavigation/>
    </Provider>
  );
}