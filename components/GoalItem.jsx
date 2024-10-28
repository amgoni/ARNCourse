import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, onDeleteGoal, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => [
          styles.goalItem,
          pressed && styles.pressedItem,
        ]}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#210644",
    opacity: 0.5,
  },
});
