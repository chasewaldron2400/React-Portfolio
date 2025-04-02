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
      caption: "Chef Chase Creations.",
    },
    {
      id: 2,
      images: [
        '/assets/static/miyuYameshitaGCW24.JPEG',
        '/assets/static/zachWentzGCW24.JPEG',
        '/assets/static/manceGCW24.JPEG',
        '/assets/static/redactedRPW24.JPEG',
        '/assets/static/waldronEmilJay.JPEG',
      ],
      caption: "2024 Wresting Photo Dump",
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
