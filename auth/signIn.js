import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Keyboard,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import ButtonHighlight from "../components/ButtonHighlited";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";


const SignIn = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Show, setShow] = useState(true);


  //

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardWillShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardWillShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardWillShow = () => {
    
    setShow(false);
  };

  const _keyboardDidHide = () => {
   
    setShow(true);
  };

  const pressHandler = async () => {
    setIsLoading(true);
    try {
      await dispatch(authActions.signIn(Email, Password));
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} enabled={false}>
      <View style={{ ...styles.buttonsContainer, top: 0, left: 0 }}>
        {Show && (
          <ButtonHighlight next={() => navigation.navigate("newAccount")}>
            NEW ACCOUNT
          </ButtonHighlight>
        )}
      </View>
      <View style={styles.container}>
        <Text style={{...styles.welcome,fontFamily:"Piedra_400Regular"}}>WELCOME BACK</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={Email}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput
          style={styles.inputs}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={Password}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={{ ...styles.buttonsContainer, bottom: 50, right: 0 }}>
        
          <ButtonHighlight onPress={pressHandler}>SIGN IN</ButtonHighlight>
       
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#70d6ff",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  inputs: {
    width: "80%",
    height: 70,
    borderWidth: 3,
    borderColor: "#023e8a",
    borderRadius: 20,
    margin: 10,
    padding: 15,
    backgroundColor: "#caf0f8",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },

  buttonsContainer: {
    height: "20%",
    position: "absolute",
  },
  welcome: {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 20,
  
  },
});
export default SignIn;
