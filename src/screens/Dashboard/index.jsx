import React from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { useUser } from "../../utils/hooks/useUser";
import { COLORS } from "../../utils/theme";
import ChatList from "./Components/ChatList";
import DashHeader from "./Components/DashHeader";
import RoomList from "./Components/RoomList";

const Dashboard = (props) => {
  const { navigation } = props;
  const {
    user: { full_name },
    onPressLogout,
  } = useUser();

  return (
    <SafeAreaWrapper containerStyle={styles.containerStyle}>
      <DashHeader onPressLogout={onPressLogout} userName={full_name} />
      <View style={styles.curvedContainer}>
        <RoomList />
        <ChatList />
      </View>
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
