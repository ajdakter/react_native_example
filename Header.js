import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.firstContainer}>
      <View style={styles.secondContainer}>
        <Text style={styles.nameStyle}>My App</Text>
      </View>
      <View style={styles.thirdContainer}>
        <FontAwesome5 name="link" size={32} color="#40241a" />
        <MaterialIcons name="local-post-office" size={32} color="#40241a" />
        <AntDesign name="questioncircle" size={32} color="#40241a" />
        <AntDesign name="exclamationcircle" size={32} color="#40241a" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: "#ff7043",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    marginTop: Constant.statusBarHeight,
  },
  secondContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 20,
  },
  thirdContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "40%",
    margin: 10,
    justifyContent: "space-around",
  },
  nameStyle: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#40241a",
  },
});
