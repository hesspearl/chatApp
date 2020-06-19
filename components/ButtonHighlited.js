import React, {useState} from "react";
import { View, Text, TouchableHighlight,
    Animated, StyleSheet , Easing} from "react-native";
    import { LinearGradient } from 'expo-linear-gradient';

const ButtonHighlight = (props) => {

    const changeSize = new Animated.Value(0);

    console.log(changeSize)
    const useSizeUp = () => {
        changeSize.setValue(0);
        Animated.timing(changeSize, {
          toValue: 1,
          duration: 2000,
          easing: Easing.bounce,
          
        }).start()
      };

    
    
      const size = changeSize.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1,1.5, 1],
      });


  return (
    <TouchableHighlight onPress={() => {
        useSizeUp()
    }}
   style={{height:200, borderRadius:100,
   elevation:10}}>
     <Animated.View style={{
          ...styles.button,
           transform:[{ scale: size }],
           
      }}>
    <LinearGradient
    
     colors={ ["#FF70A6","#ff9770", "#ffd670"]
       }
       start={{ x: 1, y: 1 }} 
      end={{ x: 0, y: 0 }}
      style={styles.button}>
   
    
        <Text style={styles.text}>{props.children}</Text>
      
    </LinearGradient>
</Animated.View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,

    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { 
      textAlign: "center",
   fontWeight: "bold",
    fontSize: 20,
    color:"#4a4e69",

 },
});
export default ButtonHighlight;
