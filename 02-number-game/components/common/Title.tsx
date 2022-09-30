import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Title({ children }: PropsWithChildren) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    textAlign: "center",
  },
});
