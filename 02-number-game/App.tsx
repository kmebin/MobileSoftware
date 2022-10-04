import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickNumberHandler = (enteredNumber: number) => {
    setUserNumber(enteredNumber);
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
            <GameOverScreen />
          ) : userNumber ? (
            <GameScreen userNumber={userNumber} onGameOver={() => setGameIsOver(true)} />
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
