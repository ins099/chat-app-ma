import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const ChatList = (props) => {
  const { chats } = props;

  const renderItem = ({ item, index }) => {
    return <ChatItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
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
  const { _id, name, last_message } = props;
  const navigation = useNavigation();
  const onPressChat = () => {
    navigation.navigate("Inbox", { chatId: _id, chatName: name });
  };
  return (
    <TouchableOpacity
      style={styles.chatItemContainer}
      onPress={onPressChat}
      key={_id}
    >
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
