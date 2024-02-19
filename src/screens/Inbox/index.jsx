import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { GiftedChat } from "react-native-gifted-chat";
import ChatHeader from "./components/ChatHeader";
import Feather from "react-native-vector-icons/Feather";
import { ms } from "react-native-size-matters";
import { COLORS } from "../../utils/theme";

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hello developer",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaWrapper containerStyle={{ paddingHorizontal: 0 }}>
      <ChatHeader />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        containerStyle={styles.textInputContainerStyle}
        primaryStyle={{ alignItems: "center" }}
        textInputProps={{ style: styles.textInput }}
        renderSend={(props) => {
            console.log("SEND PROPS====", JSON.stringify(props,null, 2))
          return (
            <TouchableOpacity {...props} style={styles.sendContainer} onPress={onSend}>
              <Feather
                name="send"
                size={ms(23)}
                disabled
                color={COLORS.primary}
              />
            </TouchableOpacity>
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
    borderRadius:100,
    backgroundColor:COLORS.lightblue,
    paddingRight:2,
    marginLeft:5
  },
  textInputContainerStyle: {
    backgroundColor: "transparent",
    borderTopWidth: 1,
    borderTopColor:COLORS.primary
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
    borderRightWidth:1,
    borderColor:COLORS.lightblue
  },
});
