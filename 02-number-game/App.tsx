import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [roundsCount, setRoundsCount] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsIsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsIsLoaded) {
    return <AppLoading />;
  }

  const pickNumberHandler = (enteredNumber: number) => {
    setUserNumber(enteredNumber);
  };

  const gameOverHandler = (roundsCount: number) => {
    setGameIsOver(true);
    setRoundsCount(roundsCount);
  };

  const restartHandler = () => {
    setUserNumber(null);
    setRoundsCount(0);
    setGameIsOver(false);
  };

  return (
    <LinearGradient style={styles.rootScreen} colors={[colors.plum, colors.yellow]}>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
        resizeMode='cover'
      >
        <SafeAreaView style={styles.rootScreen}>
          {gameIsOver ? (
            <GameOverScreen roundsCount={roundsCount} userNumber={userNumber as number} onRestart={restartHandler} />
          ) : userNumber ? (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ) : (
            <StartGameScreen onPickNumber={pickNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
