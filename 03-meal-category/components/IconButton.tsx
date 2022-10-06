import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IconButtonProps = {
  icon: any;
  onPress: () => void;
};

function IconButton({ icon, onPress }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={icon} size={24} color='white' />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({});
