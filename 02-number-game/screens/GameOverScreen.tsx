import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CommonButton from "../components/common/CommonButton";
import Title from "../components/common/Title";
import colors from "../constants/colors";

export type GameOverScreenProps = {
  roundsCount: number;
  userNumber: number;
  onRestart: () => void;
};

export default function GameOverScreen({ roundsCount, userNumber, onRestart }: GameOverScreenProps) {
  const { width, height } = useWindowDimensions();

  const imageStyle = {
    width: height < 400 ? 80 : width < 380 ? 150 : 300,
    height: height < 400 ? 80 : width < 380 ? 150 : 300,
    borderRadius: width / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require("../assets/images/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.strong}>{roundsCount}</Text> rounds to guess the number{" "}
          <Text style={styles.strong}>{userNumber}</Text>.
        </Text>
        <CommonButton onPress={onRestart}>Start New Game</CommonButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    margin: 36,
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
