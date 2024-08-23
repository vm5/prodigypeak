import React from 'react';
import './about.css'; 

const AboutUsPage = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <div className="aboutus-header">
          <img src="/aboutus-removebg-preview.png" alt="About Us Logo" className="aboutus-logo" />
          <h1>About Us</h1>
        </div>
        <p>
          Welcome to Prodigy Peak! We are a dedicated platform aimed at helping students excel in Physics, Chemistry, and Mathematics. Our mission is to provide quality education and resources to students from classes 8 to 12, ensuring they reach their academic goals.
        </p>
        <p>
          At Prodigy Peak, we believe that every student has the potential to succeed with the right guidance and support. Our experienced educators and comprehensive study materials are designed to make learning engaging and effective.
        </p>
        <p>
          Join us today and be a part of a community of learners who are achieving great things in their academic journey!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
