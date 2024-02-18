import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import EmptyList from "../../../components/EmptyList";
import { COLORS } from "../../../utils/theme";
import {
  TextBig,
  TextNormal,
  TextSmall,
} from "../../../components/CustomTexts";
import { getInitials } from "../../../utils/helpers";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const CHAT_LIST = [
  {
    id: "1",
    name: "Room Number 1",
    last_message: "Hi this is the last message.",
  },
  {
    id: "2",
    name: "Room Number 2",
    last_message: "Hi this is the last message.",
  },
  {
    id: "4",
    name: "Room Number 4",
    last_message: "Hi this is the last message.",
  },
  {
    id: "3",
    name: "Room Number 3",
    last_message: "Hi this is the last message.",
  },
  {
    id: "7",
    name: "Room Number 7",
    last_message: "Hi this is the last message.",
  },
  {
    id: "5",
    name: "Room Number 5",
    last_message: "Hi this is the last message.",
  },
  {
    id: "6",
    name: "Room Number 6",
    last_message: "Hi this is the last message.",
  },
  {
    id: "8",
    name: "Room Number 8",
    last_message: "Hi this is the last message.",
  },
  {
    id: "9",
    name: "Room Number 9",
    last_message: "Hi this is the last message.",
  },
  {
    id: "10",
    name: "Room Number 10",
    last_message: "Hi this is the last message.",
  },
  {
    id: "11",
    name: "Room Number 11",
    last_message: "Hi this is the last message.",
  },
];

const ChatList = (props) => {
  const {} = props;

  const renderItem = ({ item, index }) => {
    return <ChatItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CHAT_LIST}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: scale(50) }}
        ListEmptyComponent={() => <EmptyList />}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChatList;

const ChatItem = (props) => {
  const { id, name, last_message } = props;
  const navigation = useNavigation();
  const onPressChat = () => {
    navigation.navigate("Inbox", { chatId: id });
  };
  return (
    <TouchableOpacity style={styles.chatItemContainer} onPress = {onPressChat}>
      <View style={styles.itemLeftContainer}>
        <View style={styles.initialContainer}>
          <TextBig color={COLORS.white} bold>
            {getInitials(name)}
          </TextBig>
        </View>
      </View>
      <View style={styles.itemMainContainer}>
        <TextNormal bold>{name}</TextNormal>
        <TextSmall>{last_message}</TextSmall>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatItemContainer: {
    width: "100%",
    minHeight: 80,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgrey,
  },
  itemLeftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemMainContainer: { flex: 4, justifyContent: "center", marginLeft: 5 },
  initialContainer: {
    height: scale(50),
    aspectRatio: 1,
    borderRadius: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
});
