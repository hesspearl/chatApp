import React from 'react'
import { Modal, Portal, Text, Button} from 'react-native-paper';
import{Image,View , StyleSheet} from "react-native"

const ModalMsg= props =>{

    
return (
    
    <Portal>
    
    <Modal visible={props.visible} 
    onDismiss={props.hidden}
    >
    <View style={styles.container}>
    <Image source={require("../assets/cat-2083492_1280.jpg")}
    style={{height:200, width:300}} />
      <Text>Example Modal</Text>
      <Button mode="outlined"
      style={styles.btn}>
          press Me
      </Button>
      </View>
    </Modal>
 
  </Portal>

)
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"white",
          alignItems:"center", 
          height:300,
          padding:5
        },
        btn:{
            margin:10 ,
             alignSelf:"flex-end" }
})
export default ModalMsg;