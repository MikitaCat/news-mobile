import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  View,
  Text,
} from "react-native";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "./API/getPosts";

export default function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((data) => {
        setNews(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

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
