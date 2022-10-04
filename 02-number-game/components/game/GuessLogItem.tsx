import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export type GuessLogItemProps = {
  round: number;
  guess: number;
};

export default function GuessLogItem({ round, guess }: GuessLogItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderColor: colors.darkPlum,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: colors.yellow,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
