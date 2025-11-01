import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface PageProps {
  interestKind: string;
  deposit: string;
  rate: string;
}

export default function InterestTemplate({
  interestKind,
  deposit,
  rate,
}: PageProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText]}>{interestKind}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: wp(6.4),
          alignItems: "center",
        }}
      >
        <Text style={styles.headerText}>{deposit}</Text>
        <Text style={[styles.headerText, { color: "#3629B7" }]}>{rate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: hp(1.4),
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  headerText: {
    fontWeight: "medium",
    fontSize: hp(1.85),
  },
});
