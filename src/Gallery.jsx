import React from "react";
import "./Gallery.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <div className="gallery-section" id="gallery">
      <p className="gallery-subtitle">View Our Gallery</p>
      <h2 className="gallery-title">Medicare Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}