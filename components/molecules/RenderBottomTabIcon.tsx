import { BottomTabIcons } from "@/constantData";
import React from "react";
import HomeSvg from "../atoms/icons/HomeSvg";
import MessagesSvg from "../atoms/icons/MessagesSvg";
import SearchIcon from "../atoms/icons/SearchIcon";
import SettingsSvg from "../atoms/icons/SettingsSvg";

interface RenderBottomTabIconProp {
  name: (typeof BottomTabIcons)[number]["name"];
  focused?: boolean;
}

export default function RenderBottomTabIcon({
  name,
  focused,
}: RenderBottomTabIconProp) {
  let result = <HomeSvg stroke={focused ? "#fff" : "#898989"} />;

  switch (name) {
    case "Home":
      break;
    case "Search":
      result = <SearchIcon stroke={focused ? "#fff" : "#898989"} />;
      break;
    case "Messages":
      result = <MessagesSvg stroke={focused ? "#fff" : "#898989"} />;
      break;
    case "Settings":
      result = <SettingsSvg stroke={focused ? "#fff" : "#898989"} />;
      break;
    default:
      break;
  }
  return result;
}

// const styles = StyleSheet.create({});
