import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
});
