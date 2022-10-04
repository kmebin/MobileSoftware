import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function NumberContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    padding: 24,
    borderWidth: 4,
    borderColor: colors.yellow,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: colors.yellow,
  },
});
