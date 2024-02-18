import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, ms, vs, mvs } from "react-native-size-matters";

export const TextNormal = (props) => {
  const {
    children,
    textStyle,
    underline,
    center,
    bold,
    right,
    color,
    ...rest
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.textNormal,
        bold && { fontWeight: "700" },
        underline && { textDecorationLine: "underline" },
        center && { textAlign: "center" },
        right && { textAlign: "right" },
        color && { color },
        textStyle,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const TextSmall = (props) => {
  const {
    children,
    textStyle,
    center,
    underline,
    bold,
    color,
    right,
    ...rest
  } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.textSmall,
        bold && { fontWeight: "700" },
        underline && { textDecorationLine: "underline" },
        center && { textAlign: "center" },
        right && { textAlign: "right" },
        color && { color },
        textStyle,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const TextBig = (props) => {
  const { children, textStyle, underline, bold, color, ...rest } = props;
  return (
    <Text
      style={[
        styles.text,
        styles.textBig,
        bold && { fontWeight: "700" },
        underline && { textDecorationLine: "underline" },
        color && { color },
        textStyle,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: { color: "black" },
  textNormal: { fontSize: s(16) },
  textSmall: { fontSize: s(12) },
  textBig: { fontSize: s(20) },
});
