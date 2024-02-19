import React, { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { ms } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import { io } from "socket.io-client";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { BASE_URL } from "../../utils/constant";
import { useUser } from "../../utils/hooks/useUser";
import { COLORS } from "../../utils/theme";
import ChatHeader from "./components/ChatHeader";

const socket = io(BASE_URL);

const Inbox = (props) => {
  const {
    route: { params },
  } = props;

  const chatId = params?.chatId;
  const chatName = params?.chatName;
  const {
    user: { _id: userId, name },
  } = useUser();

  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    socket.emit("sendMessage", { chatId, message: messages[0], userId });
    setMessages((previousMessages) =>
      GiftedChat.append(messages, previousMessages)
    );
  }, []);

  useEffect(() => {
    socket.on("connect", () => console.log("CONNECTED"));

    socket.emit("getChatRoomChat", chatId);
    socket.on(`receiveMessage-${chatId}`, ({ messages }) => {
      setMessages((previousMessages) =>
        GiftedChat.append(messages, previousMessages)
      );
    });
    socket.on(`receiveNewMessage-${chatId}`, ({ msg }) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, msg)
      );
    });

    // return () => socket.disconnect();
  }, []);

  return (
    <SafeAreaWrapper containerStyle={{ paddingHorizontal: 0 }}>
      <ChatHeader title={chatName} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userId,
          name: name,
        }}
        renderAvatar={null}
        inverted={false}
        containerStyle={styles.textInputContainerStyle}
        primaryStyle={{ alignItems: "center" }}
        textInputProps={{ style: styles.textInput }}
        renderSend={(props) => {
          return (
            <Send
              alwaysShowSend
              {...props}
              containerStyle={styles.sendContainer}
            >
              <Feather
                name="send"
                size={ms(23)}
                disabled
                color={COLORS.primary}
              />
            </Send>
          );
        }}
      />
    </SafeAreaWrapper>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  sendContainer: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: COLORS.lightblue,
    paddingRight: 2,
    marginLeft: 5,
  },
  textInputContainerStyle: {
    backgroundColor: "transparent",
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
  },
  textInput: {
    backgroundColor: "red",
    flex: 1,
    marginLeft: 5,
    fontSize: ms(17),
    lineHeight: ms(17),
    maxHeight: 200,
    marginTop: Platform.select({
      ios: 6,
      android: 0,
      web: 6,
    }),
    marginBottom: Platform.select({
      ios: 5,
      android: 3,
      web: 4,
    }),
    // borderRadius: 40,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRightWidth: 1,
    borderColor: COLORS.lightblue,
  },
});
