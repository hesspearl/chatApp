import React from "react";
import {
  createStackNavigator,
 TransitionPresets,
 CardStyleInterpolators
} from "@react-navigation/stack";
import Profile from "../screens/profile";
import MainPage from "../screens/mainPage";
import SignIn from "../auth/signIn";
import NewAccount from "../auth/new-account";
import {Easing} from "react-native"


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

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator

      screenOptions={{ 
        headerTitle: null,
         headerTransparent: true ,
         headerLeft:null,
         gestureEnabled: true ,
         gestureDirection:"horizontal",
         cardStyleInterpolator:
         CardStyleInterpolators.forFadeFromBottomAndroid,

         transitionSpec:{
           open:config,
           close:config
         }
         }}
    >
    <AdminStackNavigator.Screen
       name="signIn" 
       component={SignIn}
        /> 
    <AdminStackNavigator.Screen
       name="newAccount"
        component={NewAccount} />
      
      
    
      
    </AdminStackNavigator.Navigator>
  );
};
