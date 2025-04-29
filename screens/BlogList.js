import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogCard from "../components/BlogCard.js";

const BlogList = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/collections/67bb4646c62011c3b5006899/items", {
      headers: {
        Authorization: "Bearer a59179b4b660b71fbbfdd2d32510bc5a1db5157ee70d86a49a25cd265d25bae0",
        "accept-version": "2.0.0"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedBlogs = data.items.map((item) => ({
          id: item.id,
          title: item.fieldData.name,
          image: item.fieldData["main-image"]?.url,
          summary: item.fieldData["post-summary"],
          body: item.fieldData["post-body"],
        }));
        setBlogs(formattedBlogs);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Blog Posts</Text>
        <TextInput
          style={styles.search}
          placeholder="Search blog titles..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView width="100%" contentContainerStyle={{ alignItems: 'center' }}>
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            summary={blog.summary}
            image={blog.image}
            onPress={() => navigation.navigate("BlogDetails", blog)}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e9ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  search: {
    width: "80%",
    height: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default BlogList;
