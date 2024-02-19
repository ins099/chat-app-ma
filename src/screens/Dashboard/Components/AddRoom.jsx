import React from "react";
import { Keyboard, Modal, Pressable, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import { TextNormal } from "../../../components/CustomTexts";
import { COLORS } from "../../../utils/theme";
import CustomInput from "../../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/CustomButton";

const AddRoom = (props) => {
  const { visible, onDismiss, setVisible, handleCreateRoom } = props;

  const { control, handleSubmit, setError } = useForm();

  const onPressAdd = () => {
    handleSubmit(async (data) => {
      let res = await handleCreateRoom(data.name);
      console.log({res})
      if (res?.error) {
        setError("name", { message: res.error });
      } else {
        setVisible(false);
      }
    })();
  };

  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable
        style={styles.modalContainer}
        onPress={() => setVisible(false)}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TextNormal>Create New Room.</TextNormal>
            <Entypo
              name="cross"
              color="black"
              onPress={() => setVisible(false)}
              size={scale(20)}
            />
          </View>
          <View style={styles.contentContainer}>
            <CustomInput
              control={control}
              key="name"
              name="name"
              placeholder="Enter room name"
              rules={{ required: { value: true, message: "This is requires" } }}
            />
            <CustomButton label="Add Room" onPress={onPressAdd} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddRoom;

const styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: COLORS.white,
    // alignSelf: "center",
    borderRadius: 14,
    width: 300,
    height: 250,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: COLORS.lightgrey,
    borderBottomWidth: 1,
    height: 50,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
