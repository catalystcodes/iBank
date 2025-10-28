import RenderLabel from "@/components/atoms/RenderLabel";
import RenderBottomTabIcon from "@/components/molecules/RenderBottomTabIcon";
import { Tabs, useSegments } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function TabLayout() {
  const segments = useSegments() as string[];

  const isInSearchNested =
    segments.includes("Search") && segments[segments.length - 1] !== "Search";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: false,

        tabBarStyle: {
          paddingHorizontal: wp(8),
          paddingTop: hp(2.33),
          paddingBottom: hp(4),
          display: isInSearchNested ? "none" : "flex",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                focused ? styles.onFocusedStyles : null,
              ]}
            >
              <RenderBottomTabIcon focused={focused} name="Home" />
              <RenderLabel display={focused ? "flex" : "none"} label="Home" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={"Search"}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                focused ? styles.onFocusedStyles : null,
              ]}
            >
              <RenderBottomTabIcon focused={focused} name="Search" />
              <RenderLabel display={focused ? "flex" : "none"} label="Search" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                focused ? styles.onFocusedStyles : null,
              ]}
            >
              <RenderBottomTabIcon focused={focused} name="Messages" />
              <RenderLabel
                display={focused ? "flex" : "none"}
                label="Messages"
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={"Setting"}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                focused ? styles.onFocusedStyles : null,
              ]}
            >
              <RenderBottomTabIcon focused={focused} name="Settings" />
              <RenderLabel
                display={focused ? "flex" : "none"}
                label="Settings"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    justifyContent: "center",
    width: wp(24),
  },
  onFocusedStyles: {
    backgroundColor: "#3629B7",
    borderRadius: 20,
    paddingHorizontal: wp(3.5),
    paddingVertical: hp(1),
  },
});
