import {useEffect} from "react"
import {Animated ,Easing } from "react-native"



// console.log(fadeAnim)

export default useRotate = (value) => {
    const rotateAnim = new Animated.Value(0);

    useEffect(() => {
        rotateAnim.setValue(0);
        Animated.timing(rotateAnim, {
          toValue: value,
          duration: 200,
          easing: Easing.linear,
        }).start();
    }, [])
 
    return rotateAnim
};
