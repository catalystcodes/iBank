import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface RenderLabelProp {
  label: string;
  display: "none" | "flex" | "contents";
}

export default function RenderLabel({ label, display }: RenderLabelProp) {
  return (
    <View>
      <Text style={[styles.label, { display: display }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 400,
    fontSize: hp(1.5),
    color: "#fff",
  },
});
