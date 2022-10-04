import { Image, StyleSheet, Text, View } from "react-native";
import CommonButton from "../components/common/CommonButton";
import Title from "../components/common/Title";
import colors from "../constants/colors";

export type GameOverScreenType = {
  roundsCount: number;
  userNumber: number;
  onRestart: () => void;
};

export default function GameOverScreen({ roundsCount, userNumber, onRestart }: GameOverScreenType) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.strong}>{roundsCount}</Text> rounds to guess the number{" "}
        <Text style={styles.strong}>{userNumber}</Text>.
      </Text>
      <CommonButton onPress={onRestart}>Start New Game</CommonButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.darkPlum,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    marginBottom: 24,
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  strong: {
    fontFamily: "open-sans-bold",
    color: colors.plum,
  },
});
