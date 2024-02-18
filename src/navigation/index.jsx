import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DashStack from "./DashStack";

const RootNavigation = () => {
  const isUser = true;
  return (
    <NavigationContainer>
      {isUser ? <DashStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
