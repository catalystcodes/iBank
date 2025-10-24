import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack
        initialRouteName="test/index"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)/index" />
        <Stack.Screen name="(auth)/SignUp" />
        <Stack.Screen name="(auth)/SignIn" />
        <Stack.Screen name="test/index" />
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
