import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        source={require("../assets/images/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} children={"Red jacket for sale!"} />
        <AppText style={styles.subTitle} children={"$50"} />
      </View>

      <View style={styles.userContainer}>
        <ListItem
          title={"Mario Andolini"}
          image={require("../assets/images/mario.png")}
          subTitle={"2 posts this month"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "navy",
  },
  detailsContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: "500" },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
