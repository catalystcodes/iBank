import HomeIconCard from "@/components/atoms/HomeIconCard";
import NotificationSvg from "@/components/atoms/icons/NotificationSvg";
import { HomeIcon } from "@/constantData";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Home() {
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
      <View style={styles.bodyContainer}>
        {/* <View style={{}}>
          <ImageBackground
            source={require("../../assets/images/Multi.png")}
            style={styles.bgImg}
            resizeMode="cover"
          >
            <Text>my name is...</Text>
          </ImageBackground>
        </View> */}

        <Image
          style={{ width: "100%", height: hp(26) }}
          resizeMode="cover"
          source={require("../../assets/images/Multi-img.png")}
        />
        <View style={styles.homeIcons}>
          {HomeIcon.map((data, ind) => (
            <HomeIconCard {...data} key={ind} />
          ))}
        </View>
      </View>
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
    display: "flex",
    flex: 1,
    rowGap: hp(3.7),
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: hp(2.8),
  },
  bgImg: {
    backgroundColor: "red",
    // width: "100%",
    height: hp(25.7),
    paddingTop: hp(2.43),
    paddingBottom: hp(4.63),
    // paddingLeft: wp(6.13),
  },
  homeIcons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: hp(1.85),
    columnGap: wp(4.26),
    paddingHorizontal: wp(5),
  },
});
