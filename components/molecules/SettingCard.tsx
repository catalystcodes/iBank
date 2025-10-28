import { useRouter } from "expo-router";
import React from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowBack from "../atoms/icons/ArrowBack";

const SettingCard = ({ title }: { title: string }) => {
  const { push } = useRouter();
  const handlePress = (title: string) => {
    switch (title) {
      case "Password":
        push("/(tabs)/Setting/Password");
        break;
      case "Touch ID":
        push("/Setting/TouchID");
        break;
      case "Languages":
        push("/Setting/Languages");
        break;
      case "App information":
        push("/Setting/AppInfo");
        break;
    }
  };
  return (
    <Pressable
      onPress={() => handlePress(title)}
      style={{
        paddingBottom: hp(1.9),
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#ECECEC",
        borderBottomWidth: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: wp(4.3), color: "#343434" }}> {title} </Text>
      <View>
        <ArrowBack
          color="#E0E0E0"
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default SettingCard;
