import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { COLORS } from "../../utils/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../../components/SearchBar";
import DismissWrapper from "../../components/Wrapper/DismissWrapper";
import { io } from "socket.io-client";
import { BASE_URL } from "../../utils/constant";
import ChatList from "../Dashboard/Components/ChatList";

const socket = io(BASE_URL);

const Search = (props) => {
  const { navigation } = props;
  const { top } = useSafeAreaInsets();

  const [search, setSearch] = useState("");
  const [chatRooms, setChatRooms] = useState([]);

  const onSearch = (txt) => {
    setSearch(txt);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED ======", socket.connected); // true
    });

    socket.emit("searchChatRoom", search);
    socket.on("searchResult", (result) => {
      setChatRooms(result);
    });

    return () => {
      socket.on("disconnect", () => {
        console.log("SOCKET CONNECTED ======", socket.connected); // false
      });
    };
  }, [search]);

  return (
    <SafeAreaWrapper containerStyle={[styles.containerStyle, { top }]}>
      <DismissWrapper>
        <StatusBar backgroundColor={COLORS.primary} style="inverted" />
        <View style={styles.curvedContainer}>
          <SearchBar value={search} onChange={onSearch} />
          <ChatList chats={chatRooms} />
        </View>
      </DismissWrapper>
    </SafeAreaWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 0,
  },
  curvedContainer: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
