import PageHeader from "@/components/atoms/PageHeader";
import AppInfoCard from "@/components/molecules/AppInfoCard";
import { appInfo } from "@/constantData";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AppInfo = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <PageHeader title="App information" showArrowBack />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: wp(5.3),
          fontWeight: "600",
          marginBottom: hp(3.4),
        }}
      >
        CaBank E-mobile Banking
      </Text>
      <View style={{ rowGap: hp(2.5), paddingHorizontal: wp(6.4) }}>
        {appInfo.map((item, index) => (
          <AppInfoCard {...item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default AppInfo;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: wp(7.5),
    paddingTop: hp(4.9),
    marginBottom: hp(4.9),
  },
});
