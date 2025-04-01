import React from "react";

const Post = ({ image, caption }) => {
  return (
    <div className="post">
      <img src={image} alt="Blog Post" className="post-image" />
      <p className="caption">{caption}</p>
    </div>
  );
};

export default Post;
