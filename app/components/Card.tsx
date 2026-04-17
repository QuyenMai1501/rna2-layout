import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  title: string;
  subTitle?: string;
  image: ImageSourcePropType;
}

export default function Card({ title, subTitle, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsCard}>
          <AppText style={styles.title} children={title} />
          <AppText style={styles.subTitle} children={subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  detailsCard: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
  },
});
