import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Mark from "../atoms/icons/Mark";

interface LanguageTabCardProps {
  logo: ImageSourcePropType;
  language: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const LanguageTabCard = ({
  logo,
  language,
  isSelected,
  onPress,
}: LanguageTabCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: wp(3.2),
          }}
        >
          <Image source={logo} style={styles.logo} />
          <Text style={[styles.text]}>{language}</Text>
        </View>
        {isSelected && (
          <View>
            <Mark />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LanguageTabCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  logo: {
    width: 24,
    height: 24,
  },
  text: {
    color: "#989898",
    fontSize: wp(4.3),
    fontWeight: "500",
  },
});
