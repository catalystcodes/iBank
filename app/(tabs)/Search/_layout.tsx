import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SearchLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Branch" />
        <Stack.Screen name="Interest" />
        <Stack.Screen name="ExchangeRate" />
        <Stack.Screen name="Exchange" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
