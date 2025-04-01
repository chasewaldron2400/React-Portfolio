import React, { useState } from "react";

const Post = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="post">
      <div className="image-container">
        <button className="nav-btn left" onClick={prevImage}>&#8249;</button>
        <img src={images[currentIndex]} alt="Blog Post" className="post-image" />
        <button className="nav-btn right" onClick={nextImage}>&#8250;</button>
      </div>
      <p className="caption">{caption}</p>
    </div>
  );
};

export default Post;
