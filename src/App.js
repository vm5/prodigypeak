import React from 'react';
import styled, { keyframes } from 'styled-components';
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

// Container styling
const Container = styled.div`
  padding: 20px;
  background-color: silver;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Keyframes for the fade-in and slide-up animation
const fadeInAndSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for the fall animation
const fallAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Line styling with animation
const Line = styled.h1`
  font-family: 'Verdana';
  color: purple;
  font-weight: bold;
  font-size: 2rem;
  animation: ${fadeInAndSlideUp} 1s ease-in-out;
`;

// Image styling with fall animation
const FallingImage = styled.img`
  width: 500px; /* Adjust the size as needed */
  height: 500px;
  animation: ${fallAnimation} 1.5s ease-in-out;
`;

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
      <Container>
        <Line>Get in touch with us today!</Line>
        <FallingImage src="git-removebg-preview.png" alt="git" />
      </Container>
      <ReviewsPage />
      <EnrollPage />
      <Footer />
    </div>
  );
}

export default App;
