import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const BlogPostListItem = ({ title, id, deleteBlog }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>
        {title} - {id}
      </Text>
      <TouchableOpacity onPress={() => deleteBlog(id)}>
        <Feather style={styles.icon} name="trash" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: "red",
  },
});

export default BlogPostListItem;
