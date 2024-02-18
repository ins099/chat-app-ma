import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import SafeAreaWrapper from "../../components/Wrapper/SafeAreaWrapper";
import { COLORS } from "../../utils/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../../components/SearchBar";
import DismissWrapper from "../../components/Wrapper/DismissWrapper";

const Search = (props) => {
  const { navigation } = props;
  const { top } = useSafeAreaInsets();

  const [search, setSearch] = useState("");

  const onSearch = (txt) => {
    setSearch(txt);
  };

  return (
    <SafeAreaWrapper containerStyle={[styles.containerStyle, { top }]}>
      <DismissWrapper>
        <StatusBar backgroundColor={COLORS.primary} style="inverted" />
        <View style={styles.curvedContainer}>
          <SearchBar value={search} onChange={onSearch} />
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
