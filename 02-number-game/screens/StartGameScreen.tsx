import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CommonButton from "../components/common/CommonButton";
import colors from "../constants/colors";
import checkInvalidNumber from "../utils/checkInvalidNumber";

export type StartGameScreenProps = {
  onPickNumber: (value: number) => void;
};

export default function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    if (checkInvalidNumber(+enteredNumber)) {
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    onPickNumber(+enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        value={enteredNumber}
        maxLength={2}
        keyboardType='number-pad'
        onChangeText={(enteredNumber) => setEnteredNumber(enteredNumber)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <CommonButton onPress={resetHandler}>Reset</CommonButton>
        </View>
        <View style={styles.button}>
          <CommonButton onPress={confirmHandler}>Confirm</CommonButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.darkPlum,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.yellow,
    color: colors.yellow,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
