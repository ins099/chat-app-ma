import React from "react";
import { useLoginMutation } from "../../redux/apis/auth.api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setUserToReducer,
} from "../../redux/reducers/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, setError, clearErrors } = useForm({
    defaultValues: { email: "alaminsaram@gmail.com", password: "1234567890" },
  });
  const [loginUser] = useLoginMutation();

  const handleLogin = handleSubmit(async (data) => {
    try {
      const response = await loginUser(data);
      console.log("STING RESPONSE=======", JSON.stringify(response, null, 2));
      if (response.error) {
        setError("email", { message: " " });
        setError("password", { message: response.error.data.message });
        throw new Error(JSON.stringify(response));
      }
      clearErrors();
      dispatch(setAccessToken(response.data.token));
      dispatch(setUserToReducer(response.data.user));
      return;
    } catch (error) {
      console.log("ERROR LOGGIN ", error);
    }
  });

  return {
    handleLogin,

    control,
    handleSubmit,
  };
};
