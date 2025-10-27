import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface PageProps {
  title: string;
  label: string;
  img: ImageSourcePropType;
}

export default function SearchCard({ img, label, title }: PageProps) {
  const { push } = useRouter();
  const handlePress = (title: string) => {
    switch (title) {
      case "Branch":
        push("/(tabs)/Search/Branch");
        break;
      case "Interest rate":
        push("/(tabs)/Search/Interest");
        break;
      case "Exchange rate":
        push("/(tabs)/Search/ExchangeRate");
        break;
      case "Exchange":
        push("/(tabs)/Search/Exchange");
        break;
    }
  };

  return (
    <Pressable onPress={() => handlePress(title)} style={styles.container}>
      <View style={{ display: "flex", flexDirection: "column", rowGap: hp(1) }}>
        <Text style={{ fontWeight: "semibold", fontSize: hp(1.85) }}>
          {title}
        </Text>
        <Text style={{ color: "#979797", fontSize: hp(1.4) }}>{label}</Text>
      </View>
      <Image source={img} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: hp(1.85),
    paddingHorizontal: wp(4.27),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
