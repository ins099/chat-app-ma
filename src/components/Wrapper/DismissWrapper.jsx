import { Keyboard, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const DismissWrapper = (props) => {
  const { children } = props;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DismissWrapper;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
