import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
    title: string;
    subTitle?: string;
    image: ImageSourcePropType;
}

export default function ListItem({ title, subTitle, image }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText children={title} style={styles.title} />
        <AppText children={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "navy",
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
