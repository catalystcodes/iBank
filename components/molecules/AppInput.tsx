import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HidePasswordIcon from "../atoms/icons/HidePasswordIcon";
import ShowPasswordIcon from "../atoms/icons/ShowPasswordIcon";

type InputTextProps = TextInputProps & {
  type?: "password" | "text";
  label?: string;
  handleChange?: (e: any) => void;
  inputValue?: string;
  header?: string;
  placeholderTextColor?: string;
};

const AppInput = (props: InputTextProps) => {
  const {
    type,
    secureTextEntry,
    label,
    inputValue,
    handleChange,
    header,
    placeholderTextColor = "#CACACA",
    ...otherProps
  } = props;

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={{}}>
      {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
      <View>
        <TextInput
          {...otherProps}
          onChange={handleChange}
          style={[styles.inputStyle, otherProps.style]}
          secureTextEntry={type === "password" ? hidePassword : secureTextEntry}
          placeholderTextColor={placeholderTextColor}
        />
        {type === "password" && (
          <View
            style={{
              position: "absolute",
              right: 0,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              zIndex: 10,
              width: wp(14),
            }}
          >
            <Pressable
              onPress={() => setHidePassword((prev) => !prev)}
              hitSlop={10}
            >
              {hidePassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "#CACACA",
    fontSize: 14,
    height: hp(6.2),
    borderRadius: 15,
    paddingLeft: wp(3.2),
    zIndex: 1,
  },
  labelStyle: {
    fontSize: 12,
    marginBottom: hp(0.9),
    color: "#979797",
    fontWeight: "600",
  },
});
