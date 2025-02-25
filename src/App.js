import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactFooter from "./components/ContactFooter"; 
import Footer from "./components/Footer"; 
import About from "./components/About";
import CompanyValues from "./components/CompanyValues";
import FounderSection from "./components/FounderSection";
import HeaderSection from "./components/HeaderSection";
import ProductPage from "./components/ProductPage";
import CareerPage from "./components/CareerPage"; 
import ContactPage from "./components/ContactPage"; 
import WelcomeSection from "./components/WelcomeSection"; 
import ChooseUsSection from "./components/ChooseUsSection"; 
import Carousel from "./components/Carousel"; 
import QualitySection from "./components/QualitySection"; 
import CustomCarousel from "./components/CustomCarousel"; 
import Infrastructure from "./components/Infrastructure"; 
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/ContactPage.css";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

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
