import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

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
        <Image style={styles.image} source={require("../assets/images/jammin.jpeg")} />
        <TextInput
          style={styles.textInput}
          value={enteredGoal}
          placeholder='Your course goals!'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#5e0acc' onPress={addGoalHandler} />
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
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
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
