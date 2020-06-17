import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Info from "./info";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../Colors";

import SwitchColors from "../components/SwitchColors";

const Profile = ({ route, navigation }) => {
  const { userInfo, darkColor } = route.params;
  

  // console.log(userInfo)
  return (
    <LinearGradient
      colors={
        !darkColor
          ? [Colors.firstColor, Colors.secondColor]
          : ["white", "black"]
      }
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
    >
    

      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Image style={styles.image} source={{ uri: userInfo.pic }} />
        </View>

        <View style={{ margin: 10, colors: "transparent" }}>
          <Info>Name: {userInfo.user}</Info>
          <Info>Age: {userInfo.age}</Info>
          <Info>Gender: {userInfo.gender}</Info>
          <Info>City: {userInfo.city}</Info>
        </View>

        <LinearGradient
          colors={["#f3ffbd", "#b2dbbf"]}
          style={{
            ...styles.border,
            width: "90%",
            height: "20%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Info>Email: {userInfo.email}</Info>
            <Info>Contact: {userInfo.phone}</Info>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};
//<LinearGradient colors={['#b2dbbf', '#f3ffbd']}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 100,
  },
  border: {
    width: "80%",
    height: "40%",
    margin: 30,
    borderRadius: 5,
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  contain: {
    height: "50%",
    width: "50%",
    zIndex: 3,
    position: "absolute",
    right: 0,
    top: 10,
    backgroundColor: "white",
  },
});
export default Profile;
