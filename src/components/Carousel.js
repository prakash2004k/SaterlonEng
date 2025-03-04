import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: 'img.jpeg', alt: 'Image 1' },
    { src: 'com.png', alt: 'Image 2' },
    { src: '1.jpg', alt: 'Image 3' }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-bs-target="#imageCarousel"
            data-bs-slide-to={index}
            className={activeIndex === index ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={image.src} className="d-block w-100 carousel-img" alt={image.alt} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
