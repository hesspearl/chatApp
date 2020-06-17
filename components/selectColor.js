import React ,{useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {ColorPicker} from 'react-native-color-picker'

const SelectColor=({route , navigation , firstOne} ) =>{
 
    const [newColor, setNewColor] = useState("")
   
    const {color , first}=route.params
    console.log(color)

    useEffect(() => {
        if (first==="true"){
            console.log(newColor)
            firstOne(newColor)
        }
    }, [first])

    const selectedColorHandler=(color)=>{
        setNewColor(color)

navigation.goBack()
    }
return (

<ColorPicker
    onColorSelected={selectedColorHandler }
    defaultColor={color}
    style={styles.container}
  />
 
)
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        zIndex:1
    }

})
export default SelectColor;