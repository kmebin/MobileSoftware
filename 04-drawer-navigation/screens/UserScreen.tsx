import type { DrawerScreenProps } from "@react-navigation/drawer";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type UserScreenProps = DrawerScreenProps<RootStackParamList, "User">;

function UserScreen({ navigation }: UserScreenProps) {
  const opneDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={opneDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
