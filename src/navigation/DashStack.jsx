import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";
import Search from "../screens/Search";
import Inbox from "../screens/Inbox";

const Stack = createNativeStackNavigator();

const DashStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Search" component={Search} options={{presentation:'modal'}}/>
    </Stack.Navigator>
  );
};

export default DashStack;
