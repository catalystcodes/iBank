import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ paddingTop: 50 }}>
      <Text>test view</Text>
      <Link href="/(auth)/SignUp">Go to sign up page</Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
