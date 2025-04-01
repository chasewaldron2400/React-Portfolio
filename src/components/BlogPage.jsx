import React, { useState } from "react";
import Post from "../components/Post"; // Import the Post component

const BlogPage = () => {
  // Sample posts with multiple images
  const [posts, setPosts] = useState([
    {
      id: 1,
      images: [
        '/assets/static/salmonGravlax.JPEG',
        '/assets/static/thaiSalad.JPEG',
        '/assets/static/tunaWonton.JPEG',
      ],
      caption: "A glimpse into what im up to most mornings. 🎉",
    },
    {
      id: 2,
      images: [
        "https://via.placeholder.com/600/d32776",
        "https://via.placeholder.com/600/f66b97",
      ],
      caption: "Loving this new blogging journey! 🚀",
    },
  ]);

  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      <div className="feed">
        {posts.map((post) => (
          <Post key={post.id} images={post.images} caption={post.caption} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
