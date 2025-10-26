import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowBack from "./icons/ArrowBack";

type PageHeaderProps = {
  title?: string;
  showArrowBack?: boolean;
  titleColor?: string;
  arrowColor?: string;
};

const PageHeader = ({
  title,
  showArrowBack,
  titleColor = "#000",
  arrowColor,
}: PageHeaderProps) => {
  return (
    <View style={styles.container}>
      {showArrowBack && (
        <Pressable onPress={() => router.back()}>
          <ArrowBack color={arrowColor || titleColor} />
        </Pressable>
      )}
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp(3),
    columnGap: wp(1.6),
  },
  title: {
    fontWeight: "600",
    fontSize: wp(5.3),
  },
});
