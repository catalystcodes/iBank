import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AppInfoCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <View
      style={{
        paddingBottom: hp(1.5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#ECECEC",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#3629B7" }}>
        {desc}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppInfoCard;
