import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactFooter from "./components/ContactFooter"; // Footer specific to ContactPage
import Footer from "./components/Footer"; // General Footer
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

// Layout component to maintain common structure
const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

// Pages
const HomePage = () => (
  <Layout>
    <Carousel />
    <WelcomeSection />
    <ChooseUsSection />
    <CustomCarousel />
    <QualitySection />
  </Layout>
);

const AboutPage = () => (
  <Layout>
    <HeaderSection />
    <About />
    <CompanyValues />
    <FounderSection />
    <QualitySection />
  </Layout>
);

const CareerPageLayout = () => (
  <Layout>
    <CareerPage />
  </Layout>
);

const ContactPageLayout = () => (
  <div>
    <Navbar />
    <ContactPage />
    <ContactFooter /> {/* Use ContactFooter for this specific page */}
  </div>
);

// Main App component
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<Layout><ProductPage /></Layout>} />
      <Route path="/careers" element={<CareerPageLayout />} /> {/* Career Page Route */}
      <Route path="/contactus" element={<ContactPageLayout />} /> {/* Contact Page Route */}
      <Route path="/infrastructure" element={<Layout><Infrastructure /></Layout>} /> {/* New Infrastructure Route */}
    </Routes>
  </Router>
);

export default App;
