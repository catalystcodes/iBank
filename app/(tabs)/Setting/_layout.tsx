import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SettingLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="AppInfo" />
        <Stack.Screen name="Languages" />
        <Stack.Screen name="Password" />
        <Stack.Screen name="TouchID" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
