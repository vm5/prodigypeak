import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animation styles

import Header from './header';
import Body from './body';
import SwipePage from './swipe';
import AboutUsPage from './about';
import PackagesOfferedPage from './packages';
import WhyProdigyPeakPage from './why';
import CoursePlansPage from './courses';
import ReviewsPage from './reviews';
import Footer from './footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      once: true, // Animation occurs only once as you scroll down
    });
  }, []);

  return (
    <div className="App">
      {/* Header with fade-up animation */}
      <div data-aos="fade-up">
        <Header />
      </div>

      {/* Body with custom slide-in-left animation */}
      <div data-aos="slide-left">
        <Body />
      </div>

      {/* Swipe Page with fade-down animation */}
      <div data-aos="fade-down">
        <SwipePage />
      </div>

      {/* About Us Page with custom slide-in-right animation */}
      <div data-aos="slide-right">
        <AboutUsPage />
      </div>

      {/* Why Prodigy Peak Page with slide-up animation */}
      <div data-aos="slide-up">
        <WhyProdigyPeakPage />
      </div>

      {/* Course Plans Page with flip-left animation */}
      <div data-aos="flip-left">
        <CoursePlansPage />
      </div>

      {/* Reviews Page with flip-right animation */}
      <div data-aos="flip-right">
        <ReviewsPage />
      </div>

      {/* Packages Offered Page with fade-out animation */}
      <div data-aos="fade-out">
        <PackagesOfferedPage />
      </div>

     

      {/* Footer with fade-up animation */}
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}

export default App;
