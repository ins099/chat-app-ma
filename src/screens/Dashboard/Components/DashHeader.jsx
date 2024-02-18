import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextBig } from "../../../components/CustomTexts";
import { COLORS } from "../../../utils/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ms } from "react-native-size-matters";

const DashHeader = (props) => {
    const {onPressLogout, userName} = props;
  return (
    <View style={styles.headerContainer}>
      <TextBig color={COLORS.white} bold>
        {`Hi! ${userName}.`}
      </TextBig>
      <MaterialCommunityIcons
        name="logout"
        onPress={onPressLogout}
        color={COLORS.white}
        size={ms(20)}
      />
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});
