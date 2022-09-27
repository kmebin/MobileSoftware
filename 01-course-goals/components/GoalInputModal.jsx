import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInputModal({ modalIsVisible, onAddGoal, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal({ id: Math.random().toString(), title: enteredGoal });
    setEnteredGoal("");
  };

  const cancelHandler = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredGoal}
          placeholder='Your course goals!'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "100%",
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
