import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/theme";
import { s, scale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const SearchBar = (props) => {
  const { containerStyle, value, onChange } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        key={"search"}
        value={value}
        onChangeText={(txt) => onChange(txt)}
        placeholder="Search Rooms"
        placeholderTextColor={COLORS.lightgrey}
        style={styles.textInput}
      />
      <View style={styles.iconContainer}>
        {value.length > 0 ? (
          <Entypo
            name={"circle-with-cross"}
            size={scale(20)}
            onPress={() => onChange("")}
          />
        ) : (
          <Feather
            name={"search"}
            disabled={true}
            size={scale(20)}
            onPress={() => onChange("")}
          />
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.lightgrey,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: { fontSize: s(15), color: "black", width: "90%" },
  iconContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});
