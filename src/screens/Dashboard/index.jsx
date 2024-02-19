import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { useUser } from "../../utils/hooks/useUser";
import { COLORS } from "../../utils/theme";
import ChatList from "./Components/ChatList";
import DashHeader from "./Components/DashHeader";
import RoomList from "./Components/RoomList";
import AddRoom from "./Components/AddRoom";
import { useDashboard } from "../../utils/hooks/useDashboard";
import { io } from "socket.io-client";
import { BASE_URL } from "../../utils/constant";

const socket = io(BASE_URL);

const Dashboard = (props) => {
  const { navigation } = props;
  const {
    user: { name, _id: userId },
    onPressLogout,
  } = useUser();

  const [visible, setVisible] = useState(false);

  const { handleCreateRoom, chats, chatRooms, handleJoinRoom } = useDashboard();

  const onPressAddIcon = () => setVisible(true);

  return (
    <SafeAreaWrapper containerStyle={styles.containerStyle}>
      <DashHeader onPressLogout={onPressLogout} userName={name} />
      <View style={styles.curvedContainer}>
        <RoomList
          onPressAddIcon={onPressAddIcon}
          chatRooms={chatRooms}
          handleJoinRoom={handleJoinRoom}
        />
        <ChatList chats={chats} />
      </View>
      <AddRoom
        visible={visible}
        onDismiss={() => {}}
        setVisible={setVisible}
        handleCreateRoom={handleCreateRoom}
      />
    </SafeAreaWrapper>
  );
};

export default Dashboard;

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
