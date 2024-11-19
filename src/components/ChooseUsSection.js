import React from 'react';

const ChooseUsSection = () => {
  return (
    <section className="choose-us-section py-5">
      <div className="container">
        <div className="row">
          {/* Factory Image */}
          <div className="col-md-6">
            <img src="factory.jpeg" alt="Factory Image" className="img-fluid" /> {/* Replace with the path to your image */}
          </div>
          
          {/* Why Choose Us Text Content */}
          <div className="col-md-6">
            <h3>Why Choose Us?</h3>
            <h4 className="choose-title">Premier Provider of Customized Engineering Solutions</h4>
            <p className="choose-description">
              Saterlon is a reputable provider of comprehensive engineering solutions, offering services from conceptual design to final production, including print-to-part solutions, sourcing, and workforce management. We also specialize in delivering tailored solutions that adapt to the evolving needs of our clients. Our expertise spans a wide range of industries, ensuring that we deliver precise, high-quality outcomes. With a focus on innovation and efficiency, Saterlon is committed to driving success for our customers through cutting-edge technology and exceptional service.
            </p>
            <ul className="choose-benefits">
              <li>🔸 <strong>Comprehensive Solutions:</strong> We provide streamlined, end-to-end services, optimizing time and resources.</li>
              <li>🔸 <strong>Customization & Flexibility:</strong> Tailored solutions designed to address each customer's unique challenges.</li>
              <li>🔸 <strong>Industry Expertise:</strong> Extensive sector knowledge ensures precise, high-quality, and innovative solutions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
