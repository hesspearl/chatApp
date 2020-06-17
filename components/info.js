import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Info= props =>{
return (


<Text style={styles.text}>
  {props.children}
</Text>

)
}

const styles= StyleSheet.create({
   
          text:{
            fontSize:20,
            margin:5,
            fontWeight:"bold",
        
         
          }
})
export default Info;