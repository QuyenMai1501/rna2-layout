import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle?: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions: () => ReactNode;
}

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: Props) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container]}>
            <Image source={image} style={styles.image} />
            <View>
              <AppText children={title} style={styles.title} />
              {subTitle && (
                <AppText children={subTitle} style={styles.subTitle} />
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
