import React from 'react';

const CustomCarousel = () => {
  return (
    <section className="custom-carousel-section py-5 text-center">
      <div className="container">
        <h3>Integrated Development Solutions</h3>

        <div className="content glass-effect">
          <h1>Saterlon Engineering</h1>
          <h2>Integrated Development Solutions</h2>
          <p>
            Saterlon manages all stages of the new product development cycle, including Concept Design, New Initiatives, and Product Optimization to meet application needs. We also conduct Root Cause Analysis for field failures and offer alternative design solutions. Our design solutions at Saterlon are designed to lower product costs and enhance performance.
          </p>
          <a 
  href="javascript:void(0)" 
  className="learn-more" 
  onClick={() => window.location.href = '/about'}
>
  LEARN MORE ABOUT US
</a>

        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;
