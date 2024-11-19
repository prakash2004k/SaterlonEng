import React from 'react';
import { Link } from 'react-router-dom'; 
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
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/about" className="text-white">About Us</Link></li>
            <li><Link to="/products" className="text-white">Products</Link></li>
            <li><Link to="/careers" className="text-white">Careers</Link></li>
            <li><Link to="/infrastructure" className="text-white">Infrastructure</Link></li> {/* Added Infrastructure link */}
            <li><Link to="/contactus" className="text-white">Contact Us</Link></li>
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
