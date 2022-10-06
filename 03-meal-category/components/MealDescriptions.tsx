import { StyleSheet, Text, View } from "react-native";

type MealDescriptionsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
};

function MealDescriptions({ duration, complexity, affordability, style }: MealDescriptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.description, style]}>{duration}m</Text>
      <Text style={[styles.description, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.description, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDescriptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  description: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
