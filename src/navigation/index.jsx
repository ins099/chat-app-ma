import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DashStack from "./DashStack";
import { useSelector } from "react-redux";
import { useUser } from "../utils/hooks/useUser";

const RootNavigation = () => {
  const { accessToken } = useUser();
  return (
    <NavigationContainer>
      {accessToken ? <DashStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
