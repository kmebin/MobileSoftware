import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type GridCategoryProps = {
  title: string;
  color: string;
};

export default function GridCategory({ title, color }: GridCategoryProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed, { backgroundColor: color }]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
