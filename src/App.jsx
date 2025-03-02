import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navbar";

function App() {
  const sectionRefs = {
    hero: useRef(null),
    services: useRef(null),
    howItWorks: useRef(null),
    testimonials: useRef(null),
    cta: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    sectionRefs[sectionName].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router basename="/home-service-web">
      <div>
        <NavigationBar scrollToSection={scrollToSection} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={sectionRefs.hero} id="hero">
                  <Hero />
                </div>
                <div ref={sectionRefs.services} id="services">
                  <Services />
                </div>
                <div ref={sectionRefs.howItWorks} id="how-it-works">
                  <HowItWorks />
                </div>
                <div ref={sectionRefs.testimonials} id="testimonials">
                  <Testimonials />
                </div>
                <div ref={sectionRefs.cta} id="cta">
                  <CTA />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
