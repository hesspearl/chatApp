import React,{useState, useEffect} from "react";
import { View, Text, 
  TextInput,
   StyleSheet,
   Keyboard,
   KeyboardAvoidingView } from "react-native";
import ButtonHighlight from "../components/ButtonHighlited";


const NewAccount = (props) => {
const {navigation}=props 
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Show, setShow] = useState(true);


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

  const pressHandler=()=>{

  }

  return (
      <KeyboardAvoidingView
       style={styles.containerView}
       enabled={false}
     >
    
      <View style={{ ...styles.buttonsContainer, 
      top: 0, right: 0 }}>
     { Show&&  <ButtonHighlight
        next={
    ()=>navigation.navigate("signIn")}
    style={styles.ballon}
    >SIGN IN</ButtonHighlight>
     }
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>THANKS FOR JOINING</Text>

     { !Show&&  <TextInput 
        style={styles.inputs} 
        placeholder="Name"
        onChangeText={text=>setEmail(text)} 
          value={Email}
          onSubmitEditing={Keyboard.dismiss}
        />}
      <TextInput 
        style={styles.inputs} 
        placeholder="Email"
        onChangeText={text=>setEmail(text)} 
          value={Email}
          onSubmitEditing={Keyboard.dismiss}
        />
      {!Show&&  <TextInput style={styles.inputs}
         placeholder="password"
         onChangeText={text=>setPassword(text)} 
          value={Password}
          onSubmitEditing={Keyboard.dismiss}
         />}
     
      </View>
      {Show&&<View style={{ ...styles.buttonsContainer, 
      bottom: 50, left: 0 }}>
        <ButtonHighlight
        onPress={pressHandler}
        style={styles.ballon}
        >NEW ACCOUNT</ButtonHighlight>
      </View>
      }
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
export default NewAccount;
