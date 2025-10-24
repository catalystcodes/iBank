import React from "react";
import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface AppButtonProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  onPress: () => void;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  previewIcon?: boolean;
  disabled?: boolean;
}

const AppButton = ({
  text,
  backgroundColor = "#3629B7",
  borderColor = "transparent",
  textColor = "white",
  onPress,
  fontSize = wp(4.3),
  fontWeight = "medium",
  disabled = false,
}: AppButtonProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: disabled ? "#F2F1F9" : backgroundColor,
          borderColor,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      <View style={styles.content}>
        <Text style={[styles.text, { color: textColor, fontSize, fontWeight }]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1.3),
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: wp(2),
  },
  text: {
    color: "white",
    fontSize: wp(4.3),
  },
});

export default AppButton;
