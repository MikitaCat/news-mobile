import { FlatList, StatusBar, View } from "react-native";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "./API/getPosts";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setNews(data);
        console.log("DATA", news);
      })
      .catch((error) => console.log(error));
  }, []);

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
