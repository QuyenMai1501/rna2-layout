import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import Constants from "expo-constants";

interface Props {
    children: ReactNode;
}

export default function Screen({ children }: Props) {
  return (
    <View style={styles.screen}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
})