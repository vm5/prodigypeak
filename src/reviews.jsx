import React from 'react';
import styled, { keyframes } from 'styled-components';

// Reviews Page Component
const ReviewsPage = () => {
  return (
    <ReviewsContainer>
      <ReviewsTitle>Prodigyians' Take!</ReviewsTitle>
      <hr />
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

        {/* Additional Reviews */}
        <ReviewItem>
          <Quote>“A great experience overall. The</Quote>
          <Quote>material was engaging and</Quote>
          <Quote> the instructors were knowledgeable.”</Quote>
          <Stars>⭐⭐⭐⭐</Stars>
          <Reviewer>- Anisha Patel</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“I appreciated the hands-on approach</Quote>
          <Quote>and practical examples. Really</Quote>
          <Quote> helped solidify my learning.”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Aman Kumar</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“The support from the tutors was</Quote>
          <Quote> exceptional, and the resources were</Quote>
          <Quote> very useful. Would definitely recommend!”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Priya Nair</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“The course exceeded my expectations.</Quote>
          <Quote>Great content, excellent delivery,”</Quote>
          <Quote> and a very supportive community.”</Quote>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Reviewer>- Rajesh Kumar</Reviewer>
        </ReviewItem>

        <ReviewItem>
          <Quote>“Very informative and well-organized. I</Quote>
          <Quote> felt more confident in my studies after</Quote>
          <Quote> completing the course.”</Quote>
          <Stars>⭐⭐⭐⭐</Stars>
          <Reviewer>- Sneha Reddy</Reviewer>
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
  background: linear-gradient(to right, #f0f2f5, #e0e0e0);
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid #ddd;
`;

const ReviewsTitle = styled.h1`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Verdana';
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const ReviewsContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${slideLeft} 20s linear infinite;
  gap: 20px;
  padding: 10px;
`;

const ReviewItem = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: ${fadeIn} 2s ease-in-out;
  text-align: left;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #333;
  font-family: 'Verdana';
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
