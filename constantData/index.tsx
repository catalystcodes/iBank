import HomeSvg from "@/components/atoms/icons/HomeSvg";
import MessagesSvg from "@/components/atoms/icons/MessagesSvg";
import SearchIcon from "@/components/atoms/icons/SearchIcon";
import SettingsSvg from "@/components/atoms/icons/SettingsSvg";

export const BottomTabIcons = [
  {
    name: "Home",
    Icon: HomeSvg,
  },
  {
    name: "Search",
    Icon: SearchIcon,
  },
  {
    name: "Messages",
    Icon: MessagesSvg,
  },
  {
    name: "Settings",
    Icon: SettingsSvg,
  },
] as const;
