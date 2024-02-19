import { Keyboard, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { TextNormal, TextBig, TextSmall } from "../../components/CustomTexts";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton";
import { vs } from "react-native-size-matters";
import DismissWrapper from "../../components/Wrapper/DismissWrapper";
import { COLORS } from "../../utils/theme";
import { useLogin } from "../../utils/hooks/useLogin";

const Login = (props) => {
  const { navigation } = props;

  const {handleLogin, control} = useLogin()

  const onPressSignup = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaWrapper>
      <DismissWrapper>
        <View style={styles.headingContainer}>
          <TextBig bold>Login </TextBig>
          <TextSmall>Sign into your account to proceed to app. </TextSmall>
        </View>
        <View style={styles.container}>
          <CustomInput
            control={control}
            rules={EMAIL_RULES}
            name="email"
            label="Email Address"
            placeholder="Enter your email address"
            keyboardType = "email-address"
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
          <CustomButton label="Login" onPress={handleLogin} />
        </View>
        <TextSmall center>
          Don't have an account?{" "}
          <TextSmall onPress={onPressSignup} bold color={COLORS.primary}>
            Register
          </TextSmall>
        </TextSmall>
      </DismissWrapper>
    </SafeAreaWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  buttonContainer: { marginVertical: 15, width: "80%", alignSelf: "center" },
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
