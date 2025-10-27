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
      <PageHeader
        arrowColor="black"
        title="Search"
        titleColor="Black"
        showArrowBack
      />
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
    // backgroundColor: "#343434",
    paddingTop: hp(2.9),
    paddingHorizontal: wp(6.4),
  },
  cardContainer: {
    marginTop: hp(2.8),
    display: "flex",
    rowGap: hp(2.3),
  },
});
