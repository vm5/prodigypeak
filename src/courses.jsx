import React from 'react';
import styled, { keyframes } from 'styled-components';

// Image URLs
const physicsImageUrl = 'https://static.vecteezy.com/system/resources/previews/002/753/566/original/dark-spiral-black-hole-on-galaxy-background-planet-and-physics-concept-design-illustration-vector.jpg';
const chemistryImageUrl = 'https://static.vecteezy.com/system/resources/previews/021/916/442/non_2x/hexagonal-with-glowing-particles-on-dark-blue-background-science-technology-medicine-chemistry-data-network-background-design-illustration-vector.jpg';
const mathematicsImageUrl = 'https://static.vecteezy.com/system/resources/previews/003/346/139/non_2x/dark-multicolor-rainbow-template-with-math-simbols-vector.jpg';
const counsellingImageUrl = 'https://images.squarespace-cdn.com/content/v1/6554ee61aba49d06a7168d68/1700502671338-O11UZ1PLHOER96HFSUJ0/image-asset.jpeg?format=1500w';

const CoursePlansPage = () => {
  return (
    <Container>
      <Title>Our Course Plans</Title>
      <hr />
      <Courses>
        <Course imageUrl={physicsImageUrl}>
          <CourseTitle>Physics</CourseTitle>
          <CourseDescription>
            Explore fundamental concepts of grade 8 to 12 Physics including Gravitation, Electricity, Human eye, sources of energy, mechanics, electricity, magnetism, optics, and modern physics. Covered with the best notes, MCQs, and subjective questions.
          </CourseDescription>
        </Course>
        
        <Course imageUrl={chemistryImageUrl}>
          <CourseTitle>Chemistry</CourseTitle>
          <CourseDescription>
            Dive into grade 8 to 12 Chemistry with topics from organic to inorganic chemistry. Includes top-notch notes, MCQs, and subjective questions.
          </CourseDescription>
        </Course>
        
        <Course imageUrl={mathematicsImageUrl}>
          <CourseTitle>Mathematics</CourseTitle>
          <CourseDescription>
            Strengthen your skills with algebra, calculus, probability, trigonometry, geometry, and statistics. Comprehensive notes, MCQs, and subjective questions are included.
          </CourseDescription>
        </Course>

        <Course imageUrl={counsellingImageUrl}>
          <CourseTitle>General Counselling</CourseTitle>
          <CourseDescription>
            New feature - General Counselling! Get personalized advice on academic and personal development from our experts. Includes strategies for success and more.
          </CourseDescription>
        </Course>
      </Courses>
    </Container>
  );
};

// Animation for fading in
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for pulsing effect on course titles
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  padding: 40px 20px;
  background: url('/wave.png') no-repeat center center/cover;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-in-out;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Verdana', sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const Courses = styled.div`
  display: flex;
  flex-direction: column; /* Change from wrap to column for vertical layout */
  align-items: center; /* Center items horizontally */
  gap: 20px; /* Space between course cards */
  animation: ${fadeIn} 1s ease-in-out;
`;

const Course = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 20px;
  width: 100%; /* Full width of container */
  max-width: 600px; /* Limit width of each card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1.2s ease-in-out;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  color: #fff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CourseTitle = styled.h2`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 10px;
  animation: ${pulse} 2s infinite;
  text-align: center;
  font-family: 'Verdana';
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #f0f0f0;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
`;

export default CoursePlansPage;
