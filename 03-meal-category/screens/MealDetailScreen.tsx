import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import IconButton from "../components/IconButton";
import MealDescriptions from "../components/MealDescriptions";
import ListItem from "../components/MealDetail/ListItem";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../mocks/mockData";

type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

function MealDetailScreen({ navigation, route }: MealDetailScreenProps) {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId)!;

  const [isLiked, setIsLiked] = useState(false);

  const likeMealHandler = () => {
    setIsLiked((prev) => !prev);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon={isLiked ? "star" : "staro"} onPress={likeMealHandler} />,
    });
  }, [navigation, likeMealHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDescriptions
        style={styles.description}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <View style={styles.listContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          {meal.ingredients.map((ingredient) => (
            <ListItem item={ingredient} />
          ))}
          <Subtitle>Steps</Subtitle>
          {meal.steps.map((step) => (
            <ListItem item={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  description: {
    color: "white",
  },
  listContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
