import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [locked, setLocked] = useState(false);

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
function showHideMessege (){
setIsVisible(!isVisible )
}
function lockButtons(){
  setLocked(!locked);
}

  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} disabled={counter>=10|| locked} />
      <Text style={[styles.text,{color: counter < 5 ? "green" : "red" }]}>{counter}</Text>
     < Button title="Reset"           onPress={reset}   disabled={locked}  />
      {/* 2️⃣ Add onPress and connect it to the decrease function */}
      {counter > 7 && isVisible &&  <Text>HEY HEY Too many clicks!</Text>} 
      <Button title={isVisible ?  "Hide" : "Show"} onPress={showHideMessege} />
      <Button title={locked ? "unlock":"lock"} onPress={lockButtons} />
      <Button title="Decrease"   onPress={dicrease} disabled={locked} /> 
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
    color:"Red" 
  },
});
