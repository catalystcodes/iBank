import { Pressable, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SvgProps } from "react-native-svg";

interface PageProps {
  Icon: React.ElementType<SvgProps>;
  label: string;
}

export default function HomeIconCard({ Icon, label }: PageProps) {
  return (
    <Pressable style={styles.container}>
      <Icon />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    rowGap: 12,
    alignItems: "center",
    paddingBottom: hp(1.4),
    paddingTop: hp(1.85),
    paddingHorizontal: wp(3.7),
    borderRadius: 15,
    boxShadow: "0px 5px 30px 0px #0000000D",
    width: wp(26.67),
    height: hp(11.57),
  },
  label: {
    fontWeight: 500,
    fontSize: hp(1.4),
    color: "#979797",
    textAlign: "center",
  },
});
