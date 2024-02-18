import {
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

const ROOM_LIST = [
  { id: "0", room_name: "Room 0" },
  { id: "1", room_name: "Room 1" },
  { id: "2", room_name: "Room 2" },
  { id: "3", room_name: "Room 3" },
  { id: "4", room_name: "Room 4" },
  { id: "5", room_name: "Room 5" },
  { id: "6", room_name: "Room 6" },
  { id: "7", room_name: "Room 7" },
  { id: "8", room_name: "Room 8" },
  { id: "9", room_name: "Room 9" },
];

const renderItem = ({ item, index }) => {
  return <RoomItem {...item} index={index} />;
};

const RoomList = (props) => {
  const {} = props;
  const navigation = useNavigation();

  const onPressFindRoom = () => {
    navigation.navigate("Search");
  };

  return (
    <>
      <TextSmall color={COLORS.primary} right onPress={onPressFindRoom}>
        Find More Rooms
      </TextSmall>
      <View style={styles.container}>
        <FlatList
          data={ROOM_LIST}
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
  const { room_name, id, index } = props;

  const navigation = useNavigation();

  const onPressItem = () => {
    navigation.navigate("Inbox", { chatId: id });
  };

  return (
    <TouchableOpacity
      style={[styles.roundItem, index === 0 && styles.addRoom]}
      onPress={onPressItem}
      key={id}
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
          {getInitials(room_name)}
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
