import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import AppInput from "@/components/molecules/AppInput";
import KeyboardAvoidView from "@/components/molecules/KeyboardAvoidView";
import VerifyCode from "@/components/molecules/VerifyCode";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ForgetPassword = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendCode = () => {
    setShowVerification(true);
  };

  const handleVerify = () => {
    console.log("Verifying code...");
    router.push("/(auth)/ChangePassword");
  };

  const handleEditPhone = () => {
    setShowVerification(false);
  };

  return (
    <KeyboardAvoidView>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: wp(7.2) }}>
          <PageHeader title="Forget password" showArrowBack />
        </View>

        {!showVerification ? (
          <View style={styles.subContainer}>
            <Text
              style={{
                marginBottom: hp(2),
                color: "#979797",
                fontSize: wp(3.2),
              }}
            >
              Type your phone number{" "}
            </Text>
            <AppInput
              placeholder="(+84)"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Text style={{ marginVertical: hp(2.9), fontSize: wp(3.7) }}>
              We'll text you a code to verify your phone number
            </Text>
            <AppButton text="Send" onPress={handleSendCode} />
          </View>
        ) : (
          <VerifyCode
            phoneNumber={phoneNumber}
            onVerify={handleVerify}
            onEditPhone={handleEditPhone}
          />
        )}
      </View>
    </KeyboardAvoidView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(4.9),
  },
  subContainer: {
    marginVertical: hp(2.9),
    marginHorizontal: wp(6.4),
    boxShadow: "0px 4px 10px 10px  rgba(0, 0, 0, 0.05)",
    borderRadius: 15,
    paddingHorizontal: wp(4.3),
    paddingVertical: hp(2),
  },
});
