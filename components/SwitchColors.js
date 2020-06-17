import React from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchColors = (props) => {
  const { onChange } = props;

  return (
    <View style={styles.box}>
      <Switch
        value={props.value}
        onValueChange={onChange}
        trackColor={!onChange ? { true: "#67cbe4" } : { true: "black" }}
        thumbColor={"#67cbe4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 10,
    right: 0,
    top: 0,
    position: "absolute",
    padding: 5,
    flexDirection: "row",
  },
});
export default SwitchColors;
