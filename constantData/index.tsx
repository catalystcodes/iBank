import BeneficiaryIcon from "@/components/atoms/icons/BeneficiaryIcon";
import CreditCardIcon from "@/components/atoms/icons/CreditCardIcon";
import HomeSvg from "@/components/atoms/icons/HomeSvg";
import MessagesSvg from "@/components/atoms/icons/MessagesSvg";
import MobilePrepaidIcon from "@/components/atoms/icons/MobilePrepaidIcon";
import PayBillIcon from "@/components/atoms/icons/PayBillIcon";
import SaveIcon from "@/components/atoms/icons/SaveIcon";
import SearchIcon from "@/components/atoms/icons/SearchIcon";
import SettingsSvg from "@/components/atoms/icons/SettingsSvg";
import TransactionReportIcon from "@/components/atoms/icons/TransactionReportIcon";
import TransferIcon from "@/components/atoms/icons/TransferIcon";
import WalletIcon from "@/components/atoms/icons/WalletIcon";
import WithdrawIcon from "@/components/atoms/icons/WithdrawIcon";

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

export const HomeIcon = [
  {
    Icon: WalletIcon,
    label: "Account and Card",
  },
  {
    Icon: TransferIcon,
    label: "Transfer",
  },
  {
    Icon: WithdrawIcon,
    label: "Withdraw",
  },
  {
    Icon: MobilePrepaidIcon,
    label: "Mobile Prepaid",
  },
  {
    Icon: PayBillIcon,
    label: "Pay the bill",
  },
  {
    Icon: SaveIcon,
    label: "Save online",
  },
  {
    Icon: CreditCardIcon,
    label: "Credit Card",
  },
  {
    Icon: TransactionReportIcon,
    label: "Transaction Report",
  },
  {
    Icon: BeneficiaryIcon,
    label: "Beneficiary",
  },
] as const;
