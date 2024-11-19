import React from "react";
import "./Infrastructure.css"; // Add relevant styles here

function Infrastructure() {
  return (
    <div>
      {/* Full-Screen Image */}
      <section className="full-screen-image">
        <div className="position-relative">
          <img
            src="com.png" // Replace with your company image URL
            alt="Our Company"
            className="img-fluid w-100"
          />
          <div className="text-overlay">
            <h2>Our Company</h2>
            <p>
              Welcome to our facility, where innovation meets precision. Our modern infrastructure
              ensures high-quality products, timely delivery, and customer satisfaction through
              advanced technology and dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="container content-below mt-5">
        {/* Manufacturing Units Section */}
        <div className="section fade-in slide-right">
          <div className="text">
            <h2>Manufacturing Units</h2>
            <p>
              A Manufacturing Unit is a facility where products are produced using raw materials,
              machinery, labor, and technology. These units vary in size, from small workshops to
              large industrial complexes, and are pivotal in economic development, supplying goods
              for consumption or further production.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="mu.png" // Replace with your image URL
              alt="Manufacturing Units"
            />
          </div>
        </div>

        {/* Doosan VTL Section */}
        <div className="section fade-in slide-left">
          <div className="text">
            <h2>Doosan VTL</h2>
            <p>
              Our Doosan VTL machine offers advanced vertical turning capabilities. Its precision
              engineering, combined with state-of-the-art controls, enables us to create high-quality
              components efficiently. This cutting-edge equipment enhances our manufacturing capacity,
              ensuring consistent excellence.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="doosan1.png" // Replace with your image URL
              alt="Doosan VTL"
            />
          </div>
        </div>

        {/* BFW VTL Section */}
        <div className="section fade-in slide-right">
          <div className="text">
            <h2>BFW VTL</h2>
            <p>
              Our BFW VTL machine provides precision vertical turning solutions for heavy-duty
              components. Designed for optimal performance, it ensures accuracy, efficiency, and
              reliability. Ideal for complex machining tasks, this machine supports diverse industrial
              applications with exceptional quality and consistency. Its vertical configuration enables
              stable positioning of large parts, with gravity helping to secure the workpiece on the
              horizontal table.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="btw.jpg" // Replace with your image URL
              alt="BFW VTL"
            />
          </div>
        </div>

        {/* Doosan VMC Section */}
        <div className="section fade-in slide-left">
          <div className="text">
            <h2>Doosan VMC</h2>
            <p>
              Our Doosan VMC machine delivers high-performance vertical machining for intricate and
              precise components. With advanced technology, it ensures superior accuracy, speed, and
              efficiency, making it ideal for complex industrial applications that demand quality and
              reliability in every production run.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="doosan1.png" // Replace with your image URL
              alt="Doosan VMC"
            />
          </div>
        </div>

        {/* TRIMOS V7 Section */}
        <div className="section fade-in slide-right">
          <div className="text">
            <h2>TRIMOS V7 0-700mm</h2>
            <p>
              The TRIMOS V7 height gauge, with a measurement range of 0 to 700 mm, is an advanced tool
              used in precision metrology. This model features motorized movement, enabling smooth and
              controlled operations for easy measurements. Its digital display provides clear results,
              allowing users to record measurements efficiently.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="trim.png" // Replace with your image URL
              alt="TRIMOS V7"
            />
          </div>
        </div>

        {/* BFW VMC Section */}
        <div className="section fade-in slide-left">
          <div className="text">
            <h2>BFW VMC</h2>
            <p>
              Our BFW VMC machine provides precision vertical machining for heavy-duty components. Designed
              for accuracy, efficiency, and reliability, it is ideal for complex machining tasks and
              diverse industrial applications. It ensures superior performance with consistency.
            </p>
          </div>
          <div className="image zoom">
            <img
              src="BFW.png" // Replace with your image URL
              alt="BFW VMC"
            />
          </div>
        </div>
      </div>

      {/* Quality Check Section */}
      <section className="quality-check">
        <h2>Quality Check</h2>
        <div className="cards">
          {/* Add Quality Check Cards */}
          <div className="card">
            <img
              src="mec.jpg" // Replace with your image URL
              alt="Mechanical Works"
            />
            <h3>Mechanical Works</h3>
            <p>
              Mechanical technology is the core of industrialization, shaping modern life with
              precision tools, efficient machinery, and innovative designs. It drives progress and
              quality in all sectors.
            </p>
          </div>
          <div className="card">
            <img
              src="qa.jpg" // Replace with your image URL
              alt="Automation Industry"
            />
            <h3>Automation Industry</h3>
            <p>
              Automation is the topmost technology in today's world, enabling processes to run
              autonomously, enhancing efficiency, and reducing manual intervention. Our approach
              embraces the future with open arms.
            </p>
          </div>
          <div className="card">
            <img
              src="pet.jpg" // Replace with your image URL
              alt="Petroleum Refinery"
            />
            <h3>Petroleum Refinery</h3>
            <p>
              Petroleum refining processes transform crude oil into useful products, providing
              solutions for the energy industry. Our expertise supports high-efficiency operations
              in the refining process.
            </p>
          </div>
          <div className="card">
            <img
              src="chemi.jpg" // Replace with your image URL
              alt="Chemical Engineering"
            />
            <h3>Chemical Engineering</h3>
            <p>
              We specialize in chemical engineering solutions, optimizing processes for various
              industrial applications. Our focus is on chemical processes that convert raw materials
              into useful products.
            </p>
          </div>
          <div className="card">
            <img
              src="elec.jpg" // Replace with your image URL
              alt="Electrical Engineering"
            />
            <h3>Electrical Engineering</h3>
            <p>
              We provide top-notch electrical solutions to support industry infrastructure and
              technological advancements. Our work drives efficiency and safety across industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Combined Footer Section */}
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
}

export default Infrastructure;
