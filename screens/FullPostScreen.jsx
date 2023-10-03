import styled from "styled-components/native";
import axios from "axios";
import { View, ActivityIndicator, Text } from "react-native";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://651c49b0194f77f2a5afa847.mockapi.io/news/1")
      .then(({ data }) => {
        setArticle(data);
        console.log("DATA", article);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: article.imageUrl }} />
      <PostText>{article.content}</PostText>
    </View>
  );
};
