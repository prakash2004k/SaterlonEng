import React from 'react';
import './About.css';

const FounderSection = () => (
  <section className="founder-section py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Meet Our Founder</h2>
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src="MD.jpg" alt="Swathi Kumaravel" className="img-fluid rounded-circle" style={{ width: '250px', height: '250px' }} />
        </div>
        <div className="col-md-6">
          <h3>Swathi Kumaravel</h3>
          <p>
            Swathi Kumaravel is the visionary founder and Managing Director of Saterlon Engineering. With a profound commitment
            to excellence and a keen understanding of precision manufacturing, Swathi has led the company to become a trusted
            name in the industry. Her dedication to quality and punctuality has established Saterlon Engineering as a reliable
            partner for clients seeking high-quality machinery components.
          </p>
          <p>
            Under her leadership, the company has embraced innovation while maintaining its core values, ensuring that every
            product meets the highest standards. Swathi believes in fostering strong relationships with clients and continually
            strives to enhance customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
