import AppButton from "@/components/atoms/AppButton";
import PageHeader from "@/components/atoms/PageHeader";
import AppInput from "@/components/molecules/AppInput";
import KeyboardAvoidView from "@/components/molecules/KeyboardAvoidView";
import { Link, router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SignIn = () => {
  const handleSignIn = () => {
    router.push("/(tabs)");
  };

  return (
    <KeyboardAvoidView>
      <View style={{ flexGrow: 1, backgroundColor: "#3629B7" }}>
        <View style={styles.headerContainer}>
          <PageHeader title="Sign in" showArrowBack />
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
            Welcome Back
          </Text>
          <Text style={{ fontSize: wp(3.2) }}>
            Hello there, sign in to continue
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
              source={require("../../assets/images/Illustration.png")}
              style={styles.image}
            />
          </View>
          <View style={{ display: "flex", rowGap: hp(2.5) }}>
            <AppInput placeholder="Text input" type="text" />
            <AppInput placeholder="Password" type="password" />
          </View>
          <Link style={styles.forgotPassword} href="/(auth)/ForgetPassword">
            <Text>Forgot your password ?</Text>
          </Link>
          <AppButton text="Sign in" onPress={handleSignIn} />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: hp(2.9),
            }}
          >
            <Image source={require("../../assets/images/Fingerprint.png")} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              columnGap: wp(3),
            }}
          >
            <Text style={{ fontSize: wp(3.2) }}>Don't have an account?</Text>
            <Link href={"/(auth)/SignUp"}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: wp(3.2),
                  color: "#3629B7",
                }}
              >
                Sign Up
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

export default SignIn;

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
  forgotPassword: {
    fontSize: wp(3.2),
    marginTop: hp(1.5),
    marginBottom: hp(3.9),
    textAlign: "right",
    color: "#CACACA",
  },
});
