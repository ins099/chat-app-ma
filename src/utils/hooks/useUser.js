import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const useUser = () => {
  const { user } = useSelector((store) => ({ user: store.userSlice }));
  console.log({user})
  const dispatch = useDispatch();

  const onPressLogout = () => {
    Alert.alert("Logout?", "Are you sure you want to logout?", [
      {
        text: "OK",
        onPress: () => dispatch({ type: "LOGOUT", payload: null }),
      },
      { text: "Cancel", onPress: () => {} },
    ]);
  };

  return { ...user, onPressLogout };
};
