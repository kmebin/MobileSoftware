import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export type InstructionTextProps = {
  style?: any;
};

export default function InstructionText({ children, style }: PropsWithChildren<InstructionTextProps>) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: colors.yellow,
  },
});
