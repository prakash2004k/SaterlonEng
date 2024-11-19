import React from 'react';
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

      {/* Footer Section */}
      <div className="contact-footer">
        <div className="container d-flex justify-content-between">
          <div>
            <h3>Follow Us</h3>
            <div className="social-links">
            <a href="tel:+917708666409" className="icon fas fa-phone-alt" aria-label="Phone"></a>
            <a href="mailto:saterlonengineering@gmail.com" className="icon fas fa-envelope" aria-label="Email"></a>
            <a href="https://www.linkedin.com/in/prakash-k-a313ab290/" className="icon fab fa-linkedin" aria-label="LinkedIn"></a>
            <a href="https://www.yourwebsite.com" className="icon fas fa-globe" aria-label="Website"></a>
          </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
            <li><a href="/" className="text-white">Home</a></li>
                    <li><a href="/about" className="text-white">About Us</a></li>
                    <li><a href="/products" className="text-white">Products</a></li>
                    <li><a href="/careers" className="text-white">Careers</a></li>
                    <li><a href="/infrastructure" className="text-white">Infrastructure</a></li> {/* Added Infrastructure link */}
                    <li><a href="/contactus" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="text-white text-center py-4" style={{ backgroundColor: 'black' }}>
        <p className="mb-0">&copy; 2024 Saterlon Engineering. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default CareerPage;
