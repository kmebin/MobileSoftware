import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  onPress: () => void;
};

export default function CommonButton({ onPress, children }: PropsWithChildren<ButtonProps>) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#640233" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: "#72063c",
    borderRadius: 28,
    margin: 4,
    elevation: 2,
    overflow: "hidden",
  },
  buttonText: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
