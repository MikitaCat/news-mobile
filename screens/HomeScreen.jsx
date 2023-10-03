import { FlatList, RefreshControl, TouchableOpacity } from "react-native";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "../API/getPosts";
import { Loader } from "../components/Loader";

export default function HomeScreen({ navigation }) {
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
    return <Loader />;
  }

  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Post")}>
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
