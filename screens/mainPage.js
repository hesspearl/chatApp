import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  YellowBox,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "../config/firebase";
import api from "../service/axios";
import axios from "axios";
import SwitchColors from "../components/SwitchColors";
import Colors from "../Colors";
import Modal from "../components/modal"

YellowBox.ignoreWarnings(["Setting a timer"]);

const mainPage = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [texts, setTexts] = useState("");
  const [user, setUser] = useState(null);
  const [darkColor, setDarkColor] = useState(false);
  const [visible, setVisible] = useState(false)

  const rotateAnim = new Animated.Value(0);
  const useRotate = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  };

  const loading = rotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "90deg", "360deg"],
  });

  useEffect(() => {
    randomUser();
    let messagesList = [];

    firebase
      .firestore()
      .collection("chat")
      .doc("room-1")
      .collection("MSG")
      .onSnapshot({ includeMetadataChanges: false }, function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            const {
              message,
              pic,
              user,
              email,
              gender,
              city,
              phone,
            } = change.doc.data();
            const id = change.doc.id;
            messagesList.push({
              message,
              pic,
              user,
              email,
              id,
              gender,
              city,
              phone,
            });
          }
        });

        setMessages([...messagesList]);
      });

    return () => {
      //    unsubscribe();
    };
  }, []);


  const randomUser = () => {
    useRotate();
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        const user = response.data.results[0];

        // setDistance(response.data.distance)
        setUser({
          user: `${user.name.first} ${user.name.last}`,
          pic: user.picture.large,
          age: user.registered.age,
          city: user.location.city,
          phone: user.phone,
          email: user.email,
          gender: user.gender,
        });

        //     console.log("user", user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveToCloudFunction = () => {
    api
      .post("/sendMSG", {
        message: texts,
        user: user.user,
        pic: user.pic,
        email: user.email,
        gender: user.gender,
        city: user.city,
        phone: user.phone,
      })
      .then((response) => {
        // setDistance(response.data.distance)
        //console.log(response);
        setTexts("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight:()=>
      (<SwitchColors
      value={darkColor}
      onChange={(value) => setDarkColor(value)}
    />)

    })
  }, [darkColor])

  return (
    <LinearGradient colors={  !darkColor
      ? [Colors.firstColor, Colors.secondColor]
      : ["grey", "white"]}
     start={{ x: 1, y: 1 }} 
    end={{ x: 0, y: 0 }}
    style={styles.view}>
   
    <View 
    style={{
      flex:1,
      marginTop:20
    }} >
     
       
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile", {
            userInfo: user,
            darkColor:darkColor
          })
        }
       
      >
        {user && (
          <View
            style={{
              alignItems: "center",
              marginVertical:40
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderWidth: 3,
                borderColor: "#333",
                borderRadius: 50,
              }}
              source={{ uri: user.pic }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 25, color: "#999" }}>{user.user}</Text>
              <TouchableOpacity onPress={randomUser.bind(this)}>
                <Animated.Image
                  style={{
                    transform: [{ rotate: loading }],
                    height: 40,
                    width: 40,
                  }}
                  source={require("../assets/Refresh-01.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>

      <FlatList
        data={messages}
        keyExtractor={(key) => key.id}
      style={styles.scrollView}
        renderItem={(item) => {
          return (
            
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 10,
                paddingTop: 10,
                marginRight: 60,
              }}
            >
              <TouchableOpacity onPress={() =>
          navigation.navigate("Profile", {
            userInfo: item.item,
            darkColor:darkColor
          }) }>
                <Image
                  style={{
                    margin: 5,
                    width: 40,
                    height: 40,
                    borderWidth: 1,
                    borderColor: "#333",
                    borderRadius: 50,
                  }}
                  source={{ uri: item.item.pic }}
                />
              </TouchableOpacity>
              <View style={{ marginTop: 5, flexDirection: "column" }}>
                <Text style={{ fontSize: 12, color: "#999" }}>
                  {item.item.user}
                </Text>
                <Text>{item.item.message}</Text>
              </View>
            </View>
            
          );
        }}
      />

      <View style={styles.footer}>
        <TextInput
          style={{
      
            margin: 10,
            marginTop: 0,
            borderRadius: 4,
            padding: 4,
            backgroundColor:"white",
            flex: 1,
            borderWidth: 1,
          }}
          onChangeText={(text) => setTexts(text)}
          value={texts}
        />
        <Modal
          visible={visible}
          hidden={()=>setVisible(false)}
         
        />
        <TouchableOpacity onPress={()=>setVisible(true)}>
          <Ionicons
            style={{ margin: 3 , marginHorizontal:7 }}
            name="md-image"
            size={32}
            color={"#999"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={saveToCloudFunction}>
          <Ionicons
            style={{ margin: 3 }}
            name="md-send"
            size={32}
            color={"#999"}
          />
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
};

export const screenOptions=(navData)=>{
  return{
  
   } 
  
}

const styles = StyleSheet.create({
  scrollView: {

    // alignContent: 'flex-start',

    // flexDirection: 'column',
    width: "100%",
 
    borderWidth: 1,
  },
  view: {
   flex:1
//     alignItems: "center",
//     alignContent: "center",
// paddingBottom:10,
//     paddingTop: 50,
//     borderBottomWidth: 1,
 
  },
  footer: {
 bottom:0,
 left:0,
  position:"absolute",
    flexDirection: "row",
  },

});

export default mainPage;
