import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  height: 100px;
  width: 100px;
  background-color: red;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>Hello World111!!!!!!!!!!!!!!!!!!!!!!!</Text>
      <Text style={{ fontSize: 30, color: "blue" }}>Message</Text>
      <Post />
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
