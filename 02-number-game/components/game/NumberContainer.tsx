import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import { deviceWidth } from "../../constants/themes";

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
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: colors.yellow,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: colors.yellow,
  },
});
