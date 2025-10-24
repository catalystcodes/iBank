import NotificationSvg from "@/components/atoms/icons/NotificationSvg";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerView}>
          <Image
            source={require("../../assets/images/Avatar.png")}
            width={50}
            height={50}
          />
          <Text style={styles.headerText}>Hi, Push Puttichai</Text>
        </View>
        <NotificationSvg />
      </View>
      <View style={styles.bodyContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3629B7",
    paddingTop: hp(6.5),
  },
  headerContainer: {
    paddingBottom: hp(2.7),
    paddingHorizontal: wp(6.4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4.8),
  },
  headerText: {
    fontWeight: 500,
    color: "#fff",
    fontSize: hp(1.85),
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
