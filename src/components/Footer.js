import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white py-4" style={{ backgroundColor: 'black' }}>
      <div className="container d-flex justify-content-between">
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="tel:+917708666409" className="icon fas fa-phone-alt" aria-label="Phone"></a>
            <a href="mailto:saterlonengineering@gmail.com" className="icon fas fa-envelope" aria-label="Email"></a>
            <a href="https://www.linkedin.com/in/prakash-k-a313ab290/" className="icon fab fa-linkedin" aria-label="LinkedIn"></a>
            <a href="https://www.yourwebsite.com" className="icon fas fa-globe" aria-label="Website"></a>
          </div>
        </div>

        <div className="footer-section">
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
      <div className="text-center mt-3">
        <p className="mb-0">&copy; 2024 Saterlon Engineering. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
