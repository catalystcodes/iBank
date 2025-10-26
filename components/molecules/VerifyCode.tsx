import AppButton from "@/components/atoms/AppButton";
import AppInput from "@/components/molecules/AppInput";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import KeyboardAvoidView from "./KeyboardAvoidView";

interface VerifyCodeProps {
  phoneNumber: string;
  onVerify: () => void;
  onEditPhone: () => void;
}

const VerifyCode: React.FC<VerifyCodeProps> = ({
  phoneNumber,
  onVerify,
  onEditPhone,
}) => {
  return (
    <KeyboardAvoidView>
      <View style={styles.subContainer}>
        <Text
          style={{ marginBottom: hp(2), color: "#979797", fontSize: wp(3.2) }}
        >
          Type a code
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: wp(3.2),
            alignItems: "center",
          }}
        >
          <AppInput placeholder="Code" style={{ width: wp(48.8) }} />
          <View style={{ width: wp(26.7) }}>
            <AppButton
              text="Resend"
              onPress={() => {
                console.log("resend");
              }}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: hp(2.9),
            marginBottom: hp(1.2),
            fontSize: wp(3.7),
            color: "#898989",
          }}
        >
          We texted you a code to verify your phone number{" "}
          <Text>{phoneNumber}</Text>
        </Text>
        <Text
          style={{ marginBottom: hp(3.9), fontSize: wp(3.7), color: "#898989" }}
        >
          This code will expired 10 minutes after this message. If you don't get
          a message.
        </Text>
        <AppButton text="Change password" onPress={onVerify} />
      </View>
      <TouchableOpacity onPress={onEditPhone} style={{ marginTop: hp(2) }}>
        <Text
          style={{
            color: "#3629B7",
            fontSize: wp(3.2),
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Change your phone number
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidView>
  );
};

export default VerifyCode;

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
