import { StatusBar, View } from "react-native";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "./API/getPosts";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setNews(data);
      console.log("DATA", news);
    });
  }, []);

  return (
    <View>
      {news.map((obj) => {
        return (
          <Post
            key={obj.id}
            imageUrl={obj.imageUrl}
            title={obj.title}
            createdAt={obj.createdAt}
          />
        );
      })}
      <StatusBar theme="auto" />
    </View>
  );
}
