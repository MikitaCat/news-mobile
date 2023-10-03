import { StatusBar, View, Image } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage source={{ uri: "https://picsum.photos/200/300" }} />
        <PostDetails>
          <PostTitle>Test Article</PostTitle>
          <PostDate>03/10/2023</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}
