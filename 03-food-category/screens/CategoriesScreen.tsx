import { FlatList, StyleSheet } from "react-native";
import GridCategory from "../components/GridCategory";
import { CATEGORIES } from "../mocks/mockData";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(category) => <GridCategory title={category.item.title} color={category.item.color} />}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
