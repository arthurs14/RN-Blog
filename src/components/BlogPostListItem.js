import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const BlogPostListItem = ({ title }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Feather style={styles.icon} name="trash" />
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
