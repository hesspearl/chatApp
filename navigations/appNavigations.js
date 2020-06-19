import React from "react" 
import { NavigationContainer } from "@react-navigation/native";
 import {ChatsNavigator ,AdminNavigator} from "./screensNavigator"



 const AppNavigator = props=>{

//const didTryLog = useSelector(state => state.state)
//true/false
//const isAuth = useSelector(state => state.isAuth)
//token

    return<NavigationContainer>
    <AdminNavigator/>
       
    {/* <ChatsNavigator/> */}
    </NavigationContainer>
 }
//  

 export default AppNavigator;
