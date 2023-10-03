import { StatusBar, View, Image } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage source={{ uri: "https://picsum.photos/200/300" }} />
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}
