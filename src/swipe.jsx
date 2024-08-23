import React, { useState, useEffect } from 'react';
import './swipe.css'; 

const SwipePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3); // Change to next slide
    }, 3000); 

    return () => clearInterval(autoSwipeInterval); // Clean up interval on component unmount
  }, []);

  const pages = [
    {
      title: "Welcome to Prodigy Peak!",
      description: "Your go-to platform if you want to succeed in Physics, Chemistry, and Mathematics.",
    },
    {
      title: "Enrollments Open!",
      description: "Enrollments for Prodigy Peak for classes 8 to 12 are now open!",
    },
    {
      title: "Join Us Today",
      description: "Join students who are excelling in their studies with Prodigy Peak.",
    },
     {
      title: "Prodigy Peak introduces Career Guidance",
      description: "Connect with counsellors who have excelled in guiding students.",
    },
  ];

  return (
    <div className="swipe-container">
      <div className="swipe-content">
        <h1>{pages[index].title}</h1>
        <p>{pages[index].description}</p>
      </div>
    </div>
  );
};

export default SwipePage;
