import React from 'react';
import './why.css';

const WhyProdigyPeakPage = () => {
  return (
    <div className="why-container">
      <div className="why-content">
        <h1 className="why-title">Why Choose Prodigy Peak?</h1>
        <p className="why-description">
          At Prodigy Peak, we offer personalized learning experiences that cater to each student's unique needs. Our platform is designed to make learning engaging, efficient, and effective.
        </p>
        <p className="why-description">
          Our educators are not just teachers but mentors who guide you through your academic journey with expert advice and support. Whether it's mastering difficult concepts or preparing for exams, we have the right resources to help you succeed.
        </p>
        <p className="why-description">
          We handicraft one of the best notes and present one of the best question bank(s) that helps dealing with examinations.
        </p>
        <p className="why-description">
          Join us today and take the first step towards achieving academic excellence with a community that values your success.
        </p>
      </div>
      <div className="why-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="why-svg"
        >
          <circle cx="100" cy="100" r="20" fill="#FFA500" />
          <circle cx="60" cy="60" r="40" fill="#4DB6E9" />
          <text x="60" y="60" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Experience
          </text>
          <circle cx="140" cy="60" r="40" fill="#E56BA5" />
          <text x="140" y="60" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Knowledge
          </text>
          <circle cx="60" cy="140" r="40" fill="#97E95D" />
          <text x="60" y="140" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Competitive
          </text>
          <circle cx="140" cy="140" r="40" fill="#FDCB32" />
          <text x="140" y="140" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Focused
          </text>
        </svg>
      </div>
    </div>
  );
};

export default WhyProdigyPeakPage;
