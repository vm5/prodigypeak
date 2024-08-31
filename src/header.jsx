import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: black;
  border-bottom: 2px solid #3399ff;
  font-size: 2rem;
  font-family: 'Verdana';
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 2.5s ease-in-out;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
  }
`;

const SmallHeading = styled.h4`
  display: flex;
  align-items: center;
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  span {
    color: purple;
  }
`;

const LogoContainer = styled.div`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

const StyledLogo = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Verdana';

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: normal;
    color: lightblue;
    font-size: 18px;
    transition: color 0.3s;
    padding: 5px;

    img {
      width: 24px;
      height: auto;
      margin-right: 8px;
    }

    &:hover {
      color: #3399ff;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Verdana';
  color: lightblue;
  font-size: 15px;
  transition: color 0.3s;

  img {
    width: 24px;
    height: auto;
    margin-right: 8px;
  }

  &:hover {
    color: #3399ff;
  }
`;

const SignInButton = styled(Button)`
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 2000;

  &:hover {
    background-color: #357ae8;
    transform: scale(1.05);
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

const SlidingHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin: 0;
  font-size: 2.3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  span {
    color: purple;
  }

  .heading-container {
    text-align: center;
  }
`;

// Header Component
function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    if (!isSignedIn) {
      setIsSignedIn(true);
      const middlePosition = document.body.scrollHeight / 1.2;
      window.scrollTo({
        top: middlePosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/';
    }
  };



  return (
    <HeaderContainer>
      <SignInButton onClick={handleSignIn}>
        <img src="/dm-removebg-preview.png" alt="Google Logo" />
        {isSignedIn ? 'Exit' : 'Enroll now'}
      </SignInButton>
      <SlidingHeading>
        <LogoContainer>
          <StyledLogo src="/prodigy-removebg-preview (1).png" alt="Prodigy Logo" />
        </LogoContainer>
        <div className="heading-container">
          Prodigy<span>Peak</span>
          <SmallHeading>ELEVATE YOUR POTENTIAL</SmallHeading>
        </div>
      </SlidingHeading>
      <NavLinks>
        <a href="/">
          <img src="/home-removebg-preview (1).png" alt="Home" />
          Home
        </a>
        <a
          href="https://prodigypeakdashboard.netlify.app/"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img src="/horn-removebg-preview (2).png" alt="Horn" />
          Dashboard for registered students and teachers
        </a>
        <a
          href="https://prodigytests.netlify.app/"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img src="/test-removebg-preview.png" alt="Test Series" />
          Test series
        </a>
        <a
          href="#bottom"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight / 1.4, behavior: 'smooth' })}
        >
          <img src="/faq.png" alt="FAQS" />
          FAQS
        </a>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
