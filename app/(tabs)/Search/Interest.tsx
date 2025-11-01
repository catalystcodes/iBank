import InterestTemplate from "@/components/atoms/InterestTemplate";
import PageHeader from "@/components/atoms/PageHeader";
import { interestData } from "@/constantData";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Interest() {
  return (
    <View style={styles.container}>
      <PageHeader
        arrowColor="black"
        showArrowBack
        title="Interest rate"
        titleColor="black"
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerText]}>Interest Kind</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: wp(6.4),
              alignItems: "center",
            }}
          >
            <Text style={styles.headerText}>Deposit</Text>
            <Text style={styles.headerText}>Rate</Text>
          </View>
        </View>
        <View style={{ display: "flex", rowGap: hp(2.2), marginTop: hp(3.7) }}>
          {interestData.map((data, ind) => (
            <InterestTemplate key={ind} {...data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(2.9),
    paddingHorizontal: wp(6.4),
  },
  headerContainer: {
    marginTop: hp(2.8),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#989898",
    fontWeight: "semibold",
    fontSize: hp(1.85),
    // alignItems:''
  },
});
