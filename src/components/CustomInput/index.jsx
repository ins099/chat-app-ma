import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ms, scale } from "react-native-size-matters";
import { TextNormal, TextSmall } from "../CustomTexts";
import { COLORS } from "../../utils/theme";

const CustomInput = (props) => {
  const {
    containerStyle,
    control,
    name,
    rules,
    textInputStyle,
    secureTextEntry,
    label,
    ...textInputProps
  } = props;

  const [isVisible, setIsVisible] = useState(secureTextEntry);

  const onPressEye = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      key={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            {label && <TextNormal bold>{label}</TextNormal>}
            <View style={[styles.container, containerStyle, error && {borderColor:'red'}]}>
              <TextInput
                value={value}
                key={name}
                onChangeText={(txt) => onChange(txt)}
                style={[styles.textInputStyle, textInputStyle]}
                secureTextEntry={isVisible}
                placeholderTextColor = "lightgrey"
                {...textInputProps}
              />
              {secureTextEntry && (
                <View style={styles.iconContainer}>
                  <FontAwesome
                    name={isVisible ? "eye-slash" : "eye"}
                    color={"black"}
                    onPress={onPressEye}
                    size={scale(20)}
                  />
                </View>
              )}
            </View>

            <TextSmall color="red">
              {error?.message}
            </TextSmall>
          </>
        );
      }}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    marginTop: 5,
  },
  textInputStyle: {
    width: "90%",
    minHeight: 40,
    fontSize: ms(16),
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: COLORS.primary,
  },
});
