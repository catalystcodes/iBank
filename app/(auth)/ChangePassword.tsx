import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import AppInput from "@/components/molecules/AppInput";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ChangePassword = () => {
  const handleChangePassword = () => {
    router.push("/(auth)/SuccessfulPasswordChangePage");
  };

  return (
    <View style={{ flex: 1, paddingTop: hp(4.9) }}>
      <View style={{ paddingHorizontal: wp(7.2) }}>
        <PageHeader title="Change password" showArrowBack />
      </View>

      <View style={styles.subContainer}>
        <View style={{ rowGap: hp(2.5) }}>
          <AppInput label="Type your new password" type="password" />
          <AppInput label="Confirm password" type="password" />
        </View>
        <View style={{ marginBottom: hp(7.9) }}></View>
        <AppButton text="Change password" onPress={handleChangePassword} />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  subContainer: {
    marginVertical: hp(2.9),
    marginHorizontal: wp(6.4),
    boxShadow: "0px 4px 10px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: 15,
    paddingHorizontal: wp(4.3),
    paddingVertical: hp(2),
  },
});
