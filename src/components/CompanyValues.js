import React from 'react';
import './About.css';

const CompanyValues = () => (
  <section className="company-values py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Our Core Values</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-4">
          <h3>Quality</h3>
          <p>
            We guarantee that each product is manufactured to the highest quality standards, ensuring durability and precision
            in every component. Our commitment to quality underpins every part of our operations, from sourcing raw materials
            to the final assembly.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <h3>Punctuality</h3>
          <p>
            We value our commitments and strive to deliver all products on time, ensuring that our clients can rely on us
            for their manufacturing schedules. Meeting deadlines is a core part of how we build trust and reliability.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <h3>Customer Focus</h3>
          <p>
            We strive to build strong relationships with our clients, providing reliable products and dedicated support.
            Our customer-first approach ensures that we respond to unique requirements and collaborate to achieve the best outcomes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyValues;
