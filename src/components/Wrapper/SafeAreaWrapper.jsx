import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeAreaWrapper = (props) => {
  const { children } = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal:15, backgroundColor:'white' },
});
