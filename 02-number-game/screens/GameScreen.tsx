import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CommonButton from "../components/common/CommonButton";
import Title from "../components/common/Title";
import NumberContainer from "../components/game/NumberContainer";
import generateRandomNumber from "../utils/generateRandomNumber";

export type GameScreenProps = {
  userNumber: number;
};

export type Direction = "higher" | "lower";

export default function GameScreen({ userNumber }: GameScreenProps) {
  const min = useRef(1);
  const max = useRef(100);

  const [guess, setGuess] = useState(0);

  useEffect(() => {
    const initialGuess: number = generateRandomNumber(min.current, max.current, userNumber);
    setGuess(initialGuess);
  }, []);

  const guessHandler = (direction: Direction) => {
    if ((direction === "higher" && guess > userNumber) || (direction === "lower" && guess < userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "higher") {
      min.current = guess;
    } else {
      max.current = guess;
    }

    const newGuess = generateRandomNumber(min.current, max.current, guess);
    setGuess(newGuess);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <CommonButton onPress={() => guessHandler("lower")}>-</CommonButton>
          <CommonButton onPress={() => guessHandler("higher")}>+</CommonButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
