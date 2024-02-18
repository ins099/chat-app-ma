import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TextNormal } from "../CustomTexts";
import { COLORS } from "../../utils/theme";

const CustomButton = (props) => {
  const { label, onPress, containerStyle, disabled, secondary } = props;

  return (
    <TouchableOpacity
      style={[styles.container,secondary&&styles.secondary, containerStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <TextNormal color={secondary ? COLORS.primary : COLORS.white}>{label}</TextNormal>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  secondary: { backgroundColor: COLORS.white, borderColor: COLORS.primary, borderWidth:1 },
});
