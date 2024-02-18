import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { COLORS } from "../../utils/theme";
import DashHeader from "./Components/DashHeader";
import RoomList from "./Components/RoomList";

const Dashboard = (props) => {
  const { navigation } = props;

  const onPressLogout = () => {
    Alert.alert("Logout?", "Are you sure you want to logout?");
  };

  return (
    <SafeAreaWrapper containerStyle={styles.containerStyle}>
      <DashHeader onPressLogout={onPressLogout} userName = "Insaram"/>
      <View style={styles.curvedContainer}>
        <RoomList />
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
    paddingHorizontal:20,
    paddingTop:20
  },
});
