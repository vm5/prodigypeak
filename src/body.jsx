import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

const SlidingText = styled.span`
  display: inline-block;
  animation: ${slideRightToLeft} 20s linear infinite;
  color: white;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'Verdana';
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
    span{
    color: yellow;
    }
`;

const SlidingDiv = styled.div`
  width: 100%;
  overflow: hidden;
  background: #111;
  padding: 10px 0;
  box-sizing: border-box;
  z-index: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

function Body() {
  return (
    <SlidingDiv>
      <SlidingText>
        Welcome to Prodigy <span>Peak</span>.Your go to platform if you want to succeed in Phyiscs, Chemistry and Mathematics. Enrollments for Prodigy <span>Peak</span> for classes 8 to 12 are now open! 
      </SlidingText>
    </SlidingDiv>
  );
}

export default Body;
