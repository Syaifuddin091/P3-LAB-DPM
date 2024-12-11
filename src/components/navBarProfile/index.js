import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

export default function ProfileNavBar() {
  return (
    <Header
      leftComponent={<Feather name="search" size={24} color="white" />}
      centerComponent={{ text: "MyProfile", style: styles.text }}
      rightComponent={<Feather name="menu" size={24} color="white" />}
      containerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6200ea", 
    borderBottomWidth: 0, 
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
