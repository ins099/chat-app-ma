import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constant";

export const chatRoomApi = createApi({
  reducerPath: "chatRoomApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, api) => {
      const token = await api.getState().userSlice.accessToken;
      console.log({ token });
      if (token) {
        headers.set("Authorization", token);
      }
    },
  }),
  tagTypes: ["Rooms"],
  endpoints: (builder) => ({
    getAllChatRooms: builder.query({
      query: (params) => {
        return {
          url: "chatroom",
          method: "GET",
          params,
        };
      },
      providesTags: ["Rooms"],
    }),

    useGetAllUserJoinedChatRooms: builder.query({
      query: (params) => {
        return {
          url: "me/chatroom",
          method: "GET",
          params,
        };
      },
      providesTags: ["Rooms"],
    }),

    createRoom: builder.mutation({
      query: (body) => ({
        url: "chatroom",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Rooms"],
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useGetAllChatRoomsQuery,
  useUseGetAllUserJoinedChatRoomsQuery,
} = chatRoomApi;
