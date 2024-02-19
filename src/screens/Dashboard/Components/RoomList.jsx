import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../utils/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ms, scale, vs } from "react-native-size-matters";
import { TextBig, TextSmall } from "../../../components/CustomTexts";
import { getInitials } from "../../../utils/helpers";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../utils/hooks/useUser";

const ROOM_LIST = [
  { _id: "1", room_name: "Room 1" },
  { _id: "2", room_name: "Room 2" },
  { id: "3", room_name: "Room 3" },
  { id: "4", room_name: "Room 4" },
  { id: "5", room_name: "Room 5" },
  { id: "6", room_name: "Room 6" },
  { id: "7", room_name: "Room 7" },
  { id: "8", room_name: "Room 8" },
  { id: "9", room_name: "Room 9" },
];

const RoomList = (props) => {
  const { onPressAddIcon, chatRooms, handleJoinRoom } = props;
  const navigation = useNavigation();
  const {
    user: { _id: userId },
  } = useUser();

  const onPressFindRoom = () => {
    navigation.navigate("Search");
  };

  const onPressItem = (props) => {
    const { index, users, name, _id } = props;
    console.log("======",{users, userId});
    if (index === 0) {
      return onPressAddIcon();
    } else if (users.find(i=>i == userId)) {
      navigation.navigate("Inbox", { chatId: _id, chatName: name });
    } else {
      Alert.alert("Join Room?", `Do you want to join ${name}`, [
        { text: "cancel", onPress: () => {} },
        { text: "Join", onPress: () => handleJoinRoom(_id) },
      ]);
    }
  };

  const renderItem = ({ item, index }) => {
    return <RoomItem {...item} index={index} onPressItem={onPressItem} />;
  };

  return (
    <>
      <TextSmall color={COLORS.primary} right onPress={onPressFindRoom}>
        Find More Rooms
      </TextSmall>
      <View style={styles.container}>
        <FlatList
          data={[{ _id: "0", name: "zero" }, ...chatRooms]}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separatorItem} />}
        />
      </View>
    </>
  );
};

const RoomItem = (props) => {
  const { name, _id, index, onPressItem } = props;

  return (
    <TouchableOpacity
      style={[styles.roundItem, index === 0 && styles.addRoom]}
      onPress={() => onPressItem(props)}
      key={_id}
    >
      {index === 0 ? (
        <MaterialCommunityIcons
          name="plus"
          color={COLORS.primary}
          disabled
          size={ms(30)}
        />
      ) : (
        <TextBig bold textStyle={styles.initialText}>
          {getInitials(name)}
        </TextBig>
      )}
    </TouchableOpacity>
  );
};

export default RoomList;

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  roundItem: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    height: vs(48),
    aspectRatio: 1,
  },
  separatorItem: {
    width: 10,
  },
  initialText: {
    fontSize: scale(30),
    color: COLORS.lightgrey,
  },
  addRoom: {
    borderStyle: "dashed",
  },
});
