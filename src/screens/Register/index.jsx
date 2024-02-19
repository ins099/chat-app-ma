import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { vs } from "react-native-size-matters";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { TextBig, TextSmall } from "../../components/CustomTexts";
import DismissWrapper from "../../components/Wrapper/DismissWrapper";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { COLORS } from "../../utils/theme";
import { useRegister } from "../../utils/hooks/useRegister";

const Register = (props) => {
  const { navigation } = props;

  const { control, handleRegister } = useRegister();
  const onPressLogin = () => {
    navigation.navigate("Login");
  };


  return (
    <SafeAreaWrapper>
      <DismissWrapper>
        <View style={styles.headingContainer}>
          <TextBig bold>Create Account </TextBig>
          <TextSmall>Create your account to proceed to app. </TextSmall>
        </View>
        <View style={styles.container}>
          <CustomInput
            control={control}
            rules={NAME_RULES}
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
          />
          <CustomInput
            control={control}
            rules={EMAIL_RULES}
            name="email"
            label="Email Address"
            placeholder="Enter your email address"
          />
          <CustomInput
            control={control}
            rules={PASSWORD_RULES}
            name="password"
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="Create Account"
            onPress={handleRegister}
          />
        </View>

        <TextSmall center>
          Already have an account?{" "}
          <TextSmall onPress={onPressLogin} bold color={COLORS.primary}>
            Login
          </TextSmall>
        </TextSmall>
      </DismissWrapper>
    </SafeAreaWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {},
  buttonContainer: { marginTop: 15, width: "80%", alignSelf: "center" },
  headingContainer: { height: vs(90), justifyContent: "center" },
});

export const EMAIL_RULES = {
  required: { value: true, message: "Email is required" },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};
export const PASSWORD_RULES = {
  required: { value: true, message: "It is required field" },
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
};
export const NAME_RULES = {
  required: { value: true, message: "It is required field" },
  minLength: {
    value: 3,
    message: "Name must be longer than three characters",
  },
};
