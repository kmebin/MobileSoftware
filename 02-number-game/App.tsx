import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

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
          {!userNumber ? <StartGameScreen onPickNumber={pickNumberHandler} /> : <GameScreen userNumber={userNumber} />}
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
