import React from "react";

const QualitySection = () => {
  return (
    <section className="content-section">
      {/* First Row: Quality Objective */}
      <div className="row">
        <div className="column text">
          <h2>Quality Objective</h2>
          <p>
            We aim to achieve total customer satisfaction by delivering
            high-quality products and services at competitive prices. Our focus
            is on maintaining excellence and reliability, ensuring that our
            customers receive value and superior service with every interaction.
          </p>
          <ul>
            <li>Total customer satisfaction guaranteed</li>
            <li>Committed to exceptional product quality</li>
            <li>Competitive pricing, excellent value</li>
          </ul>
        </div>
        <div className="column image">
          <img src="com.png" alt="Quality Objective" />
        </div>
      </div>

      <div className="divider"></div>

      {/* Second Row: Quality Policy */}
      <div className="row">
        <div className="column image">
          <img src="com.png" alt="Quality Policy" />
        </div>
        <div className="column text">
          <h2>Quality Policy</h2>
          <p>
            We are committed to delivering high-performing, quality products to
            our customers by continually adopting industry best practices. By
            setting higher benchmarks, we ensure continuous improvement,
            innovation, and excellence in all aspects of our products and
            services.
          </p>
          <ul>
            <li>Delivering high-performing quality products</li>
            <li>Adopting latest industry best practices</li>
            <li>Setting and exceeding higher benchmarks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
