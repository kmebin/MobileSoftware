import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Card from "../components/common/Card";
import CommonButton from "../components/common/CommonButton";
import InstructionText from "../components/common/InstructionText";
import Title from "../components/common/Title";
import NumberContainer from "../components/game/NumberContainer";
import generateRandomNumber from "../utils/generateRandomNumber";

export type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

export type Direction = "higher" | "lower";

export default function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const min = useRef(1);
  const max = useRef(100);

  const [guess, setGuess] = useState(0);

  useEffect(() => {
    const initialGuess: number = generateRandomNumber(min.current, max.current, userNumber);
    setGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (guess === userNumber) {
      onGameOver();
    }
  }, [guess, userNumber, onGameOver]);

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
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CommonButton onPress={() => guessHandler("lower")}>
              <Ionicons name='remove' size={24} color='white' />
            </CommonButton>
          </View>
          <View style={styles.button}>
            <CommonButton onPress={() => guessHandler("higher")}>
              <Ionicons name='add' size={24} color='white' />
            </CommonButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
