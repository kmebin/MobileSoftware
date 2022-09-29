import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const pickNumberHandler = (userNumber: number) => {
    setUserNumber(userNumber);
  };

  return (
    <LinearGradient style={styles.rootScreen} colors={["#ddb52f", "#4e0329"]}>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
        resizeMode='cover'
      >
        {!userNumber ? <StartGameScreen onPickNumber={pickNumberHandler} /> : <GameScreen />}
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
