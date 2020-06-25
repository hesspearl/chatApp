import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import Profile from "../screens/profile";
import MainPage from "../screens/mainPage";
import SignIn from "../auth/signIn";
import NewAccount from "../auth/new-account";

const Stack = createStackNavigator();

export const ChatsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerTitle: null, 
        headerTransparent: true }}
    >
      <Stack.Screen
        name="Home"
        component={MainPage}
        options={{ headerLeft: () => {} }}
      />
      <Stack.Screen name="Profile" component={Profile} options={{}} />
    </Stack.Navigator>
  );
};

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator

      screenOptions={{ 
        headerTitle: null,
         headerTransparent: true ,
         headerLeft:null}}
    >
    <AdminStackNavigator.Screen
       name="signIn" 
       component={SignIn} /> 
    <AdminStackNavigator.Screen
       name="newAccount"
        component={NewAccount} />
      
      
    
      
    </AdminStackNavigator.Navigator>
  );
};
