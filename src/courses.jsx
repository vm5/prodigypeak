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

        {/* New Career Guidance Section */}
        <Course>
          <CourseTitle>Career Guidance</CourseTitle>
          <CourseDescription>
            Introducing our new feature - Career Guidance! Whether you're unsure about which field to choose or need advice on how to navigate your career path, our experts are here to help. We provide personalized guidance sessions, tips for cracking interviews, and much more to help you make informed decisions and succeed in your chosen field.
          </CourseDescription>
        </Course>
      </Courses>
    </Container>
  );
};

// Animation for the courses
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

// Animation for the course titles
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
  padding: 20px;
  background-color: #f9f9f9;
  min-height: auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #333;
`;

const Courses = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Course = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  animation: ${fadeIn} 1.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
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
  justify-content: center;
  align-items: center;
  animation: ${pulse} 2s infinite;

  &:hover {
    color: #005bb5;
    transition: color 0.3s ease-in-out;
  }
`;

const CourseDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
`;

export default CoursePlansPage;
