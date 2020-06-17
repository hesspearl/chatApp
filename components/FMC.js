import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Notifications} from "expo"
import * as Permissions from "expo-permissions"

const FMC= props =>{

    
  registerForPushNotificationsAsync = async () => {
    
      const existingStatus  = await Permissions.getAsync(Permissions.NOTIFICATIONS);
       
      if (existingStatus.status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      
     
    } 
    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    
  };
return (
<View></View>
)
}

const styles= StyleSheet.create({})
export default FMC;