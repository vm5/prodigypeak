import React from 'react';
import styled, { keyframes } from 'styled-components';

const ReviewsPage = () => {
  return (
    <ReviewsContainer>
      <ReviewsTitle>Prodygian's Take!</ReviewsTitle>
      <ReviewsContent>
        <ReviewItem>
          <Quote>“The Physics course was incredibly insightful. The concepts were explained clearly, and the interactive sessions made learning enjoyable.”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Shreya Singh</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“Chemistry became my favorite subject thanks to this course! The hands-on experiments and detailed explanations made complex topics easy to understand.”</Quote>
          <Stars>⭐⭐⭐⭐</Stars>
          <Reviewer>- Vanshika Agarwal</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“Mathematics has always been challenging for me, but this course broke down difficult concepts into digestible lessons. Highly recommend it!”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Shivam Tripathi</Reviewer>
        </ReviewItem>
      </ReviewsContent>
    </ReviewsContainer>
  );
};

// Keyframes for the sliding animation
const slideLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ReviewsContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #f4f4f4;
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;
`;

const ReviewsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ReviewsContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${slideLeft} 40s linear infinite;
`;

const ReviewItem = styled.div`
 display: inline-block;
  width: 1800px;
  padding: 20px;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: left;
  color: #333;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 15px;
  font-style: italic;
  line-height: 1.6;
`;

const Stars = styled.div`
  font-size: 1.5rem;
  color: #f39c12;
  margin-bottom: 10px;
`;

const Reviewer = styled.p`
  font-size: 1rem;
  color: #2980b9;
  text-align: right;
  margin-top: 10px;
`;

export default ReviewsPage;
