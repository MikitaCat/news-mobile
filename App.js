import { StatusBar, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { FullPostScreen } from "./screens/FullPostScreen";

export default function App() {
  return (
    <View>
      {/* <HomeScreen /> */}
      <FullPostScreen />
      <StatusBar theme="auto" />
    </View>
  );
}
