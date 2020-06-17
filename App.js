import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./components/profile";
import MainPage from "./components/mainPage";
import selectColor from "./components/selectColor"
import {decode, encode} from 'base-64'
import {Provider} from "react-native-paper"

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainPage} options={
         { headerLeft:()=>{

          }}
        }/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SelectColor" component={selectColor} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}