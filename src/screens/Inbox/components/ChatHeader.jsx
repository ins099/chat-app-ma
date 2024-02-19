import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { TextNormal } from "../../../components/CustomTexts";
import { ms } from "react-native-size-matters";

const ChatHeader = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconContainer} onPress={onPressBack}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={COLORS.primary}
          disabled
          size = {ms(25)}
        />
      </Pressable>
      <View style={styles.mainContainer}>
        <TextNormal bold>{title}</TextNormal>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor:'white',
    borderBottomColor:COLORS.lightgrey,
    borderBottomWidth:1,
    minHeight:60
  },
  iconContainer: { flex: 0.7, alignItems: "center", justifyContent: "center" },
  mainContainer: { flex: 5, justifyContent: "center" },
});
