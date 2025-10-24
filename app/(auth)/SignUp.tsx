import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import AppInput from "@/components/molecules/AppInput";
import KeyboardAvoidView from "@/components/molecules/KeyboardAvoidView";
import { Checkbox } from "expo-checkbox";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SignUp = () => {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <KeyboardAvoidView>
      <View style={{ flexGrow: 1, backgroundColor: "#3629B7" }}>
        <View style={styles.headerContainer}>
          <PageHeader title="Sign up" showArrowBack />
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={{
              color: "#3629B7",
              fontSize: wp(6.4),
              fontWeight: "600",
              marginTop: hp(2.9),
              marginBottom: hp(0.5),
            }}
          >
            Welcome to us,
          </Text>
          <Text style={{ fontSize: wp(3.2) }}>
            Hello there, create New account
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: hp(4),
            }}
          >
            <Image
              source={require("../../assets/images/signUpImg.png")}
              style={styles.image}
            />
          </View>
          <View
            style={{ display: "flex", rowGap: hp(2.5), marginBottom: hp(2.5) }}
          >
            <AppInput placeholder="Name" type="text" />
            <AppInput placeholder="Text input" type="text" />
            <AppInput placeholder="Password" type="password" />
          </View>
          <View style={styles.checkBoxSec}>
            <Checkbox
              style={styles.checkBox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#3629B7" : undefined}
            />
            <Text style={{ fontSize: wp(3.7), width: wp(67.5) }}>
              By creating an account your agree to our{" "}
              <Text style={{ color: "#3629B7", fontWeight: "600" }}>
                Term and Conditions
              </Text>
            </Text>
          </View>
          <AppButton text="Sign in" onPress={() => {}} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              columnGap: wp(3),
              marginTop: hp(3.9),
            }}
          >
            <Text style={{ fontSize: wp(3.2) }}>Have an account? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: wp(3.2),
                  color: "#3629B7",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: wp(7.5),
    paddingTop: hp(4.9),
    paddingBottom: hp(1.8),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: wp(6.4),
  },
  image: {
    width: wp(56.8),
    height: hp(20.3),
  },
  checkBox: {
    height: hp(1.9),
    width: wp(4.3),
    borderWidth: 0.5,
    borderColor: "#BFBFBF",
    borderRadius: 4,
  },
  checkBoxSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4.3),
    marginBottom: hp(3.9),
  },
});
