import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  View,
  Text,
  RefreshControl,
} from "react-native";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "./API/getPosts";

export default function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = () => {
    setIsLoading(true);
    getPosts()
      .then((data) => {
        setNews(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={40} color="#0000ff" />
        <Text style={{ marginTop: 15 }}>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={news}
        renderItem={({ item }) => (
          <Post
            createdAt={item.createdAt}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        )}
      />
      {/* {news.map((obj) => {
        return (
          <Post
            key={obj.id}
            imageUrl={obj.imageUrl}
            title={obj.title}
            createdAt={obj.createdAt}
          />
        );
      })} */}
      <StatusBar theme="auto" />
    </View>
  );
}
