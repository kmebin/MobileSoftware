import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInputModal from "./components/GoalInputModal";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prev) => [newGoal, ...prev]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={() => setModalIsVisible(true)} />
      <GoalInputModal
        modalIsVisible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={() => setModalIsVisible(false)}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(goal) => <GoalItem {...goal.item} onDelteGoal={deleteGoalHandler} />}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
