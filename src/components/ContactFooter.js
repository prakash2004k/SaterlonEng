import React from 'react';
import { Link } from 'react-router-dom';

const ContactFooter = () => {
    return (
        <div className="contact-footer">
            <div className="container d-flex justify-content-between">
                <div>
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="tel:+9177086666409" className="fas fa-phone-alt" aria-label="Phone"></a>
                        <a href="mailto:saterlonengineering@gmail.com" className="fas fa-envelope" aria-label="Email"></a>
                        <a href="https://www.linkedin.com/in/prakash-k-a313ab290/" className="fab fa-linkedin" aria-label="LinkedIn"></a>
                        <a href="https://www.yourwebsite.com" className="fas fa-globe" aria-label="Website"></a>
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/infrastructure">Infrastructure</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactFooter;
