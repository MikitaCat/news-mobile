import { StatusBar, View, Image } from "react-native";
import Post from "./components/Post";

export default function App() {
  return (
    <View>
      <Post />
      <StatusBar theme="auto" />
    </View>
  );
}
