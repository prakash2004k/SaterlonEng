import React from 'react';
import './ContactPage.css'; // Import the CSS for this page

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Background Section */}
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="company-name">SATERLON ENGINEERING</p>
      </div>

      {/* Contact Information Section */}
      <div className="contact-body">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-mobile-alt"></i>
            <h4>Phone No.</h4>
            <p><a href="tel:7708666409">7708666409</a></p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope-open"></i>
            <h4>E-mail</h4>
            <p><a href="mailto:saterlonengineering@gmail.com">saterlonengineering@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
            <p>23/117-3,4 Sri Vishnu Avenue<br />Vellanaipatti, Coimbatore-641048,<br />Tamil Nadu, India</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <h4>Opening Hours</h4>
            <p>Monday - Saturday<br />(9:00 AM to 6:00 PM)</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="form-group">
              <input type="text" name="first_name" className="form-control" placeholder="First Name" />
              <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
            </div>
            <input type="hidden" name="access_key" value="374bea6e-ad12-49af-ab7e-3b0d504ec158" />
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="E-mail" />
              <input type="text" name="phone" className="form-control" placeholder="Phone" />
            </div>
            <textarea rows="5" name="message" placeholder="Message" className="form-control"></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.8356179852207!2d77.07646851036216!3d11.102252206392334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9d76356e117%3A0x8f0fba8e911cd337!2sSaterlon%20Engineering!5e0!3m2!1sen!2sin!4v1730367986333!5m2!1sen!2sin"
          width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className="full-width-footer text-white">
        <div className="container py-5 d-flex justify-content-between">
          <div>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="tel:+91770866409" aria-label="Phone"><i className="fas fa-phone-alt"></i></a>
              <a href="mailto:saterlonengineering@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/yourprofile" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.yourwebsite.com" aria-label="Website"><i className="fas fa-globe"></i></a>
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
        <div className="footer-bottom text-center py-3">
          <p className="mb-0">&copy; 2024 Saterlon Engineering. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
