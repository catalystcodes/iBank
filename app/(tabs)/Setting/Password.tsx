import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import AppInput from "@/components/molecules/AppInput";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Password = () => {
  return (
    <View style={{ paddingHorizontal: wp(6.4) }}>
      <View
        style={{
          paddingTop: hp(4.9),
          marginBottom: hp(4.9),
        }}
      >
        <PageHeader title="Change password" showArrowBack />
      </View>
      <View
        style={{
          paddingHorizontal: wp(4.3),
          paddingVertical: hp(1.9),
          //   boxShadow: "0px 4px 10px 10px  rgba(0, 0, 0, 0.05)",
          rowGap: hp(2.5),
          marginBottom: hp(7.9),
          borderRadius: 15,
        }}
      >
        <AppInput placeholder="Recent password" label="Recent password" />
        <AppInput placeholder="New password" label="New password" />
        <AppInput placeholder="Confirm new password" label="Confirm password" />
        <View style={{ marginTop: hp(5.4) }}></View>
        <AppButton text="Change password" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Password;
