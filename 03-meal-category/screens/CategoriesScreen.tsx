import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import GridCategory from "../components/GridCategory";
import { CATEGORIES } from "../mocks/mockData";

type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, "Categories">;

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  const pressHandler = (categoryId: string) => {
    navigation.navigate("MealsOverview", { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(category) => <GridCategory {...category.item} onPress={() => pressHandler(category.item.id)} />}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
