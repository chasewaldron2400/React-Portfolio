/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";

const Post = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance

    if (distance > threshold) {
      // Swiped left
      nextImage();
    } else if (distance < -threshold) {
      // Swiped right
      prevImage();
    }
  };

  return (
    <div className="post">
      <div
        className="image-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-btn left" onClick={prevImage}>
          &#8249;
        </button>
        <img
          src={images[currentIndex]}
          alt="Blog Post"
          className="post-image"
        />
        <button className="nav-btn right" onClick={nextImage}>
          &#8250;
        </button>
      </div>
      <p className="caption">{caption}</p>
    </div>
  );
};

export default Post;
