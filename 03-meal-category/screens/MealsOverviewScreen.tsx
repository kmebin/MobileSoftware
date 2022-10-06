import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../mocks/mockData";

type MealsOverviewScreenProps = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen({ navigation, route }: MealsOverviewScreenProps) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.find((id) => id === categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const pressHandler = (mealId: string) => {
    navigation.navigate("MealDetail", { mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(meal) => <MealItem {...meal.item} onPress={() => pressHandler(meal.item.id)} />}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
