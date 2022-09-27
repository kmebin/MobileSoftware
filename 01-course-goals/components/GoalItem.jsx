import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ id, title, onDelteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#210644" }}
        onPress={() => onDelteGoal(id)}
      >
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
