import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactFooter from "./components/ContactFooter"; // Footer specific to ContactPage
import Footer from "./components/Footer";
import About from "./components/About";
import CompanyValues from "./components/CompanyValues";
import FounderSection from "./components/FounderSection";
import HeaderSection from "./components/HeaderSection";
import ProductPage from "./components/ProductPage";
import CareerPage from "./components/CareerPage"; // CareerPage Component
import ContactPage from "./components/ContactPage"; // ContactPage Component
import WelcomeSection from "./components/WelcomeSection"; // New Component
import ChooseUsSection from "./components/ChooseUsSection"; // New Component
import Carousel from "./components/Carousel"; // New Component
import QualitySection from "./components/QualitySection"; // New Component
import CustomCarousel from "./components/CustomCarousel"; // New Component
import Infrastructure from "./components/Infrastructure"; // Newly added component
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/ContactPage.css"; // ContactPage CSS

const HomePage = () => (
  <div>
    <Carousel />
    <WelcomeSection /> {/* New Section */}
    <ChooseUsSection /> {/* New Section */}
    <CustomCarousel /> {/* New Custom Carousel Section */}
    <QualitySection /> {/* New Section */}
    <Footer /> {/* Footer is here for HomePage */}
  </div>
);

const AboutPage = () => (
  <div>
    <HeaderSection />
    <About />
    <CompanyValues />
    <FounderSection />
    <QualitySection />
    <Footer /> {/* Footer is here for AboutPage */}
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/careers" element={<CareerPage />} /> {/* Career Page Route */}
      <Route path="/contactus" element={<ContactPage />} /> {/* Contact Page Route */}
      <Route path="/infrastructure" element={<Infrastructure />} /> {/* New Infrastructure Route */}
    </Routes>
  </Router>
);

export default App;
