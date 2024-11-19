import React from 'react';
import './About.css'; // Custom styles

const About = () => (
  <section className="about-us py-5">
    <div className="container">
      <h2 className="text-center mb-4">Who We Are</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Updated carousel to auto-slide */}
          <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="fa1.webp" alt="Saterlon Factory 1" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src="fa2.webp" alt="Saterlon Factory 2" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src="fa3.webp" alt="Saterlon Factory 3" className="d-block w-100" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <p>
            Based in the industrial city of Coimbatore, Saterlon Engineering is a premier manufacturer of high-precision components
            for a variety of essential machinery. Specializing in products like needle vibrators, gearbox bodies, sewage pumps,
            sand screening machines, and multi-head drilling machines, we cater to industries that demand durability, accuracy,
            and reliable engineering.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
