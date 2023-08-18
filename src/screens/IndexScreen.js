import { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Context } from "../context/BlogContext";
import BlogPostListItem from "../components/BlogPostListItem";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <StatusBar style="auto" />
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => <BlogPostListItem title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
