import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  // 1️⃣ TODO: Create a function named decrease
  // It should reduce the counter by 1
  function dicrease(){
    setCounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} />
      <Text style={styles.text}>{counter}</Text>

      {/* 2️⃣ Add onPress and connect it to the decrease function */}
      <Button title="Decrease"   onPress={dicrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    marginVertical: 20,
  },
});
