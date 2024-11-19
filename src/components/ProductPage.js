import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './ProductPage.css'; // Add any specific styling for the page
import './ProductPage.module.css';
const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: 'Screen1.webp',
      title: 'Screen Vibrator',
      description: 'Our range of products include Screed Board Vibrator and External Vibrator.',
      mailSubject: 'Product%20Enquiry%20for%20Screen%20Vibrator'
    },
    {
      id: 2,
      image: 'surfaceplate.jpg',
      title: 'Surface Plate Vibrator',
      description: 'Prominent & Leading Manufacturer from Coimbatore, we offer Surface Plate Vibrator and Needle Vibrator.',
      mailSubject: 'Product%20Enquiry%20for%20Surface%20Plate%20Vibrator'
    },
    {
      id: 3,
      image: 'gb.webp',
      title: 'Gear Box',
      description: 'Pioneers in the industry, we offer Dost Gear Box Body and Gearbox Body from India.',
      mailSubject: 'Product%20Enquiry%20for%20Gear%20Box'
    },
    {
      id: 4,
      image: 'NV.webp',
      title: 'Needle Vibrator',
      description: 'Our range of products include Screed Board Vibrator and External Vibrator.',
      mailSubject: 'Product%20Enquiry%20for%20Needle%20Vibrator'
    },
    {
      id: 5,
      image: '5.jpg',
      title: 'Industrial wheel rims',
      description: 'Leading the industry, we provide high-quality Industrial Wheel Rims designed for durability and heavy-duty performance.',
      mailSubject: 'Product%20Enquiry%20for%20industrial%20wheel%20rims'
    },
    {
      id: 6,
      image: '6.jpg',
      title: 'Metal wheel drums',
      description: 'Trailblazing in the field, we deliver superior Metal Wheel Drums crafted for durability and unmatched performance.',
      mailSubject: 'Product%20Enquiry%20for%20Metal%20wheel%20drums'
    }
  ];

  return (
    <div className="product-page">
      <div className="container my-5">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => window.location.href = `mailto:saterlonengineering@gmail.com?subject=${product.mailSubject}`}
                  >
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <div className="container d-flex justify-content-between">
          <div>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="tel:+91770866409" className="fas fa-phone-alt" aria-label="Phone"></a>
              <a href="mailto:saterlonengineering@gmail.com" className="fas fa-envelope" aria-label="Email"></a>
              <a href="https://www.linkedin.com/in/yourprofile" className="fab fa-linkedin" aria-label="LinkedIn"></a>
              <a href="https://www.yourwebsite.com" className="fas fa-globe" aria-label="Website"></a>
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
    </div>
  );
};

export default ProductPage;
