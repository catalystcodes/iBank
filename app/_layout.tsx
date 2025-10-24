import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// width - 375px
// height - 864px
