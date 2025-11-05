import PageHeader from "@/components/atoms/PageHeader";
import LanguageTabCard from "@/components/molecules/LanguageTabCard";
import { languageNLogo } from "@/constantData";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <PageHeader title="Languages" showArrowBack />
      </View>

      <ScrollView>
        <View
          style={{
            paddingHorizontal: wp(6.4),
            display: "flex",
            rowGap: hp(2.5),
          }}
        >
          {languageNLogo.map((item, index) => (
            <LanguageTabCard
              key={index}
              {...item}
              isSelected={selectedLanguage === item.language}
              onPress={() => setSelectedLanguage(item.language)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(7.5),
    paddingTop: hp(4.9),
    marginBottom: hp(4.9),
  },
});

export default Languages;
