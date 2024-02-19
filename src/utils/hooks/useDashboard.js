import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateRoomMutation } from "../../redux/apis/chatroom.api";
import { useUser } from "./useUser";
import { useNavigation } from "@react-navigation/native";

export const useDashboard = () => {
  const navigation = useNavigation();
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
      navigation.navigate("Inbox", {
        chatId: response.data.chatRoom._id,
        chatName: name,
      });
    } catch (error) {
      console.log("ERROR CREATING ROOM====", error);
    }
  };

  return { handleCreateRoom };
};
