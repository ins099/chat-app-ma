import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../redux/apis/auth.api";
import {
  setAccessToken,
  setUserToReducer,
} from "../../redux/reducers/userSlice";

export const useRegister = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, setError, clearErrors } = useForm({
    defaultValues: { email: "alaminsaram@gmail.com", password: "1234567890" },
  });
  const [registerUser] = useRegisterMutation();

  const handleRegister = handleSubmit(async (data) => {
    try {
      const response = await registerUser(data);
      console.log("REGISTER RESPONSE=======", JSON.stringify(response, null, 2));
      if (response.error) {
        setError("first_name", { message: " " });
        setError("email", { message: " " });
        setError("password", { message: response.error?.data?.message || response?.error?.error });
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
    handleRegister,

    control,
    handleSubmit,
  };
};
