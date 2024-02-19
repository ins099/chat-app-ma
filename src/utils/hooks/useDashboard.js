import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateRoomMutation } from "../../redux/apis/chatroom.api";
import { useUser } from "./useUser";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const {
    user: { _id: userId },
  } = useUser();

  const [createChatRoom] = useCreateRoomMutation();

  // create room
  const handleCreateRoom = async (name) => {
    try {
      const response = await createChatRoom({ author: userId, name });
      console.log("RESPONSE", JSON.stringify(response, null, 2));
      if (response.error) {
        return {
          error:
            response.error?.data?.message ||
            response.error?.data?.error ||
            response?.error?.error,
        };
      }
    } catch (error) {
      console.log("ERROR CREATING ROOM====", error);
    }
  };

  return { handleCreateRoom };
};
