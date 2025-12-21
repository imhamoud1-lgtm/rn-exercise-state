import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 2);
  }

  // 1️⃣ TODO: Create a function named decrease
  // It should reduce the counter by 1
  function dicrease(){
    if (counter>0){setCounter(counter - 1)};
  }
  function reset(){
    setCounter(0) 
  }



  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} />
      <Text style={[styles.text,{color: counter < 5 ? "green" : "red" }]}>{counter}</Text>
     < Button title="Reset"           onPress={reset}/>
      {/* 2️⃣ Add onPress and connect it to the decrease function */}
      {counter > 7 && <Text>HEY HEY Too many clicks!</Text>} 
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
