import React from 'react';
import styled, { keyframes } from 'styled-components';

// Reviews Page Component
const ReviewsPage = () => {
  return (
    <ReviewsContainer>
      <ReviewsTitle>Prodigyians' Take!</ReviewsTitle> <hr />
      <ReviewsContent>
        <ReviewItem>
          <Quote>“The courses were insightful.</Quote>
          <Quote>The concepts were taught well</Quote>
          <Quote>and explained clearly!”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Shreya Singh</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“Chemistry became my favorite</Quote>
          <Quote>subject after this course!”</Quote>
          <Stars>⭐⭐⭐⭐</Stars>
          <Reviewer>- Vanshika Agarwal</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“Mathematics has always been</Quote>
          <Quote>challenging for me,</Quote>
          <Quote> but this course broke down</Quote>
          <Quote> difficult concepts into digestible</Quote>
          <Quote> lessons. Highly recommend it!”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Shivam Tripathi</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“The course was so</Quote>
          <Quote> well-structured. The</Quote>
          <Quote>interactive quizzes really helped</Quote>
          <Quote>reinforce my understanding.”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Rahul Deshmukh</Reviewer>
        </ReviewItem>
        <ReviewItem>
          <Quote>“The course structure was</Quote>
          <Quote>amazing. The challenges were fun</Quote>
          <Quote> and helped me grasp</Quote>
          <Quote>concepts quickly.”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Arjun Rao</Reviewer>
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
    transform: translateX(-20%);
  }
`;

// Keyframes for the fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ReviewsContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #f0f2f5;
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const ReviewsTitle = styled.h1`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Verdana', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const ReviewsContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${slideLeft} 60s linear infinite;
  padding: 10px;
  gap: 20px;
`;

const ReviewItem = styled.div`
  display: inline-block;
  width: 280px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  text-align: left;
  color: #333;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: ${fadeIn} 2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #333;
  font-family: 'Verdana', sans-serif;
  font-weight: 400;
  margin-bottom: 15px;
  font-style: italic;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Stars = styled.div`
  font-size: 1.5rem;
  color: #f39c12;
  margin-bottom: 10px;
`;

const Reviewer = styled.p`
  font-size: 1rem;
  color: #3498db;
  text-align: right;
  margin-top: 10px;
  font-weight: bold;
`;

export default ReviewsPage;
