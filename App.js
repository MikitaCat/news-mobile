import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>Hello World111!!!!!!!!!!!!!!!!!!!!!!!</Text>
      <Text style={{ fontSize: 30, color: "blue" }}>Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  testText: {
    fontSize: 23,
    color: "red",
  },
});
