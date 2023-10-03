import { StatusBar, View, Image } from "react-native";
import Post from "./components/Post";

export default function App() {
  return (
    <View>
      <Post
        imageUrl="https://picsum.photos/200"
        title="Test Article"
        createdAt="03/10/2023"
      />
      <StatusBar theme="auto" />
    </View>
  );
}
