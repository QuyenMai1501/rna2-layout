import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
