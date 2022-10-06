import { StyleSheet, Text, View } from "react-native";

type ListItemProps = {
  item: string;
};

function ListItem({ item }: ListItemProps) {
  return (
    <View style={styles.container} key={item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "#351404",
    textAlign: "center",
  },
});
