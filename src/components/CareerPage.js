import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './CareerPage.css';

const CareerPage = () => {
  return (
    <main>
      {/* Carousel */}
      <img className="carousel" src="4.jpg" alt="" />

      {/* Header Section */}
      <div className="team">
        <div className="header-text">
          <h2 className="heading-text">Join the Saterlon Engineering Team!</h2>
          <p>
            Our modern infrastructure reflects our commitment to delivering the highest quality products and services.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <div className="gallery">
          <div className="gallery-item gallery-item-1">
            <img className="gallery-img" src="pro1.jpeg" alt="" />
          </div>
          <div className="gallery-item gallery-item-2">
            <img className="gallery-img" src="pro2.webp" alt="" />
          </div>
          <div className="gallery-item gallery-item-3">
            <img className="gallery-img" src="pro3.jpeg" alt="" />
          </div>
          <div className="gallery-item gallery-item-4">
            <img className="gallery-img" src="pro5.jpg" alt="" />
          </div>
          <div className="gallery-item gallery-item-5">
            <img className="gallery-img" src="pr4.jpeg" alt="" />
          </div>
        </div>
      </div>

      {/* Job Section */}
      <div className="job-container bg-grey">
        <div className="container">
          <h2 className="heading-text">Browse Jobs</h2>
          <div className="job-section">
            <h3>Engineering</h3>
            <div className="job-row job-row-1">
              <div className="col-left">
                <a href="mailto:saterlonengineering@gmail.com">Mechanical Engineer</a>
              </div>
              <div className="col-right">Posted: Oct 26th, 2020 | Location: India</div>
            </div>
            <div className="job-row job-row-2">
              <div className="col-left">
                <a href="mailto:saterlonengineering@gmail.com">Chemical Engineer</a>
              </div>
              <div className="col-right">Posted: Oct 26th, 2020 | Location: India</div>
            </div>
            <div className="job-row job-row-3">
              <div className="col-left">
                <a href="mailto:saterlonengineering@gmail.com">Electrical Engineer</a>
              </div>
              <div className="col-right">Posted: Oct 26th, 2020 | Location: India</div>
            </div>
            <div className="job-row job-row-4">
              <div className="col-left">
                <a href="mailto:saterlonengineering@gmail.com">Automation Engineer</a>
              </div>
              <div className="col-right">Posted: Oct 26th, 2020 | Location: India</div>
            </div>
            <div className="job-row job-row-5">
              <div className="col-left">
                <a href="mailto:saterlonengineering@gmail.com">Civil Engineer</a>
              </div>
              <div className="col-right">Posted: Oct 26th, 2020 | Location: India</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareerPage;
