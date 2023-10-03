import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../API/getPosts";

export default function HomeScreen() {
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
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert("pressed")}>
            <Post
              createdAt={item.createdAt}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
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
    </>
  );
}
