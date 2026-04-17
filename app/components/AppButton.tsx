import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
}

export default function AppButton({
  title,
  onPress,
  color = colors.secondary,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 70,
    // backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: 600,
  },
});
