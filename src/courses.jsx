import React from 'react';
import styled, { keyframes } from 'styled-components';

const CoursePlansPage = () => {
  return (
    <Container>
      <Title>Our Course Plans</Title>
      <hr />
      <Courses>
        <Course>
          <CourseTitle>Physics</CourseTitle>
          <CourseDescription>
            Explore the fundamental concepts of grade 8 to 12 Physics including Gravitation, Electricity, Human eye, sources of energy mechanics, electricity, magnetism, optics, and modern physics. All of these topics are covered with the best notes and all possible MCQs and subjective questions that could be asked in the examination through continuous tests.
          </CourseDescription>
        </Course>
        
        <Course>
          <CourseTitle>Chemistry</CourseTitle>
          <CourseDescription>
            Dive into the world of grade 8 to 12 Chemistry with topics ranging from organic chemistry to physical and inorganic chemistry. All topics are covered with the best notes and all possible MCQs and subjective questions that could be asked in the examination through continuous tests.
          </CourseDescription>
        </Course>
        
        <Course>
          <CourseTitle>Mathematics</CourseTitle>
          <CourseDescription>
            Strengthen your mathematical skills with topics like algebra, calculus, probability, trigonometry, geometry, and statistics. All topics are covered with the best notes and all possible MCQs and subjective questions that could be asked in the examination through continuous tests.
          </CourseDescription>
        </Course>

        {/* Updated Section */}
        <Course>
          <CourseTitle>General Counselling</CourseTitle>
          <CourseDescription>
            Introducing our new feature - General Counselling! Whether you're unsure about your academic path or need advice on personal development, our experts are here to help. We provide personalized counselling sessions, strategies for academic success, and much more to support you in making informed decisions and achieving your goals.
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
  background-color: #f4f4f4;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Verdana';
  letter-spacing: 1px;
`;

const Courses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Course = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: ${fadeIn} 1.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CourseTitle = styled.h2`
  font-size: 1.8rem;
  color: #0073e6;
  margin-bottom: 10px;
  animation: ${pulse} 2s infinite;
  text-align: center;


  &:hover {
    color: #005bb5;
  }
`;

const CourseDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

export default CoursePlansPage;
