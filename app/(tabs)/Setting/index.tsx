import PageHeader from "@/components/atoms/PageHeader";
import SettingCard from "@/components/molecules/SettingCard";
import { settingMenu } from "@/constantData";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Settings() {
  const router = useRouter();

  const handleSettingPress = (href: string, title: string) => {
    if (href) {
      router.push(href as Href);
    } else {
      console.log(`No route defined for: ${title}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PageHeader title="Setting" showArrowBack titleColor="#fff" />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../assets/images/Avatar2.png")}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Push Puttichai</Text>
        </View>

        <View style={styles.menuContainer}>
          {settingMenu.map((item, index) => (
            <SettingCard key={index} {...item} />
          ))}
          <Pressable
            style={{
              paddingBottom: hp(1.9),
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "#ECECEC",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: wp(4.3), color: "#343434" }}>
              {" "}
              Customer care
            </Text>
            <View>
              <Text style={{ color: "#979797", fontSize: wp(3.2) }}>
                19008989
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#3629B7",
  },
  headerContainer: {
    paddingHorizontal: wp(7.5),
    paddingTop: hp(3.1),
    paddingBottom: hp(8.3),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: wp(6.4),
  },
  profileSection: {
    alignItems: "center",
    marginTop: hp(-6.1),
  },
  avatarContainer: {
    marginBottom: hp(1.5),
  },
  avatar: {
    width: wp(26.7),
    height: hp(12.3),
  },
  userName: {
    fontSize: wp(4.3),
    fontWeight: "600",
    color: "#3629B7",
    marginBottom: hp(3.9),
  },
  menuContainer: {
    // marginTop: hp(2),
    rowGap: hp(1.9),
    width: "100%",
  },
});
