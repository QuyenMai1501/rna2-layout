import { useDeviceOrientation } from "@react-native-community/hooks";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = async () => {
    const next = !isFullScreen;
    setIsFullScreen(next);
    if (next) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE,
      );
    } else {
      await ScreenOrientation.unlockAsync();
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={isFullScreen ? [] : ["top", "bottom"]}>
      <View
        style={[
          styles.video,
          { height: orientation === "landscape" ? "100%" : "30%" },
        ]}
      />
      <Pressable onPress={toggleFullScreen} style={styles.button}>
        <Text style={styles.buttonText}>
          {isFullScreen ? "Exit" : "Full Screen"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
  },
  video: {
    width: "100%",
    backgroundColor: "navy",
  },
  button: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
  },
});
