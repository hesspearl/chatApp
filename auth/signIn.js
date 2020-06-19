import React from "react";
import { View, Text, TextInput, StyleSheet,KeyboardAvoidingView } from "react-native";
import ButtonHighlight from "../components/ButtonHighlited";
const SignIn = (props) => {
  return (
      <KeyboardAvoidingView
       style={styles.containerView}
       enabled={false}
     >
    
      <View style={{ ...styles.buttonsContainer, 
      top: 0, left: 0 }}>
        <ButtonHighlight>NEW ACCOUNT</ButtonHighlight>
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME</Text>
        <TextInput style={styles.inputs} placeholder="name" />
        <TextInput style={styles.inputs} placeholder="password"/>
      </View>
      <View style={{ ...styles.buttonsContainer, 
      bottom: 50, right: 0 }}>
        <ButtonHighlight>SIGN IN</ButtonHighlight>
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
