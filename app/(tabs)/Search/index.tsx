import PageHeader from "@/components/atoms/PageHeader";
import SearchCard from "@/components/molecules/SearchCard";
import { searchData } from "@/constantData";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: wp(6.4), paddingBottom: hp(0.8) }}>
        <PageHeader
          arrowColor="black"
          title="Search"
          titleColor="Black"
          showArrowBack
        />
      </View>

      <View style={styles.cardContainer}>
        {searchData.map((data, ind) => (
          <SearchCard {...data} key={ind} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: hp(2.9),
  },
  cardContainer: {
    paddingHorizontal: wp(6.4),
    paddingTop: hp(2),
    display: "flex",
    rowGap: hp(2.3),
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
});
