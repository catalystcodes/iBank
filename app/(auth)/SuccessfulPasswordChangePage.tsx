import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SuccessfulPasswordChangePage = () => {
  const handleOkPress = () => {
    router.push("/(auth)/SignIn");
  };
  return (
    <View style={{ flex: 1, paddingTop: hp(4.9) }}>
      <View style={{ paddingHorizontal: wp(7.2) }}>
        <PageHeader showArrowBack />
      </View>
      <View style={{ paddingHorizontal: wp(6.4) }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: hp(2.9),
            marginTop: hp(3.9),
          }}
        >
          <Image
            source={require("../../assets/images/PassSuccessImg.png")}
            style={{ width: wp(87.2), height: hp(26.6) }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: wp(4.3),
            color: "#3629B7",
            fontWeight: "600",
          }}
        >
          Change password successfully!
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: wp(3.7),
            marginTop: hp(2.9),
            marginBottom: hp(3.9),
            fontWeight: "500",
          }}
        >
          You have successfully change password.
          {"\n"} Please use the new password when Sign in.
        </Text>
        <>
          <AppButton text="Ok" onPress={handleOkPress} />
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SuccessfulPasswordChangePage;
