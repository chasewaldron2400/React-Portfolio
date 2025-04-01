import React, { useState } from "react";
import Post from "../components/Post"; // Post component

const BlogPage = () => {
  // Sample posts (Replace with real data)
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/600",
      caption: "This is my first blog post! 🎉",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600",
      caption: "Loving this new blogging journey! 🚀",
    },
  ]);

  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      <div className="feed">
        {posts.map((post) => (
          <Post key={post.id} image={post.image} caption={post.caption} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
