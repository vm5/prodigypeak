import React from 'react';
import './App.css';
import Header from './header';
import Body from './body';
import SwipePage from './swipe';
import AboutUsPage from './about';
import PackagesOfferedPage from './packages';
import WhyProdigyPeakPage from './why';
import CoursePlansPage from './courses';
import ReviewsPage from './reviews';
import Footer from './footer';
import EnrollPage from './enroll';
import StudentSection from './student';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <SwipePage />
      <AboutUsPage />
      <PackagesOfferedPage />
      <WhyProdigyPeakPage />
      <CoursePlansPage />
      <ReviewsPage />
      <EnrollPage />
      <StudentSection />
      <Footer />
    </div>
  );
}

export default App;
