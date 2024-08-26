import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: black;
  border-bottom: 2px solid #3399ff;
  font-size: 2rem;
  font-family: 'Verdana';
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 2.5s ease-in-out;
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const StyledLogo = styled.img`
  width: 80px; /* Adjust size as needed */
  height: auto;

  @media (max-width: 768px) {
    width: 60px; /* Adjust size for medium screens */
  }

  @media (max-width: 480px) {
    width: 50px; /* Adjust size for small screens */
  }
`;

const SlidingHeading = styled.h1`
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin: 0;
  font-size: 2.3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;

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
    font-size: 15px;
    transition: color 0.3s;
    padding: 5px;

    img {
      width: 24px;
      height: auto;
      margin-right: 8px;
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
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 200000;
  position: absolute; /* Using absolute positioning to place the button */

  top: 10px;
  right: 20px;

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

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isThere, setIsThere] = useState(false);

  const handleSignIn = () => {
    if (!isSignedIn) {
      setIsSignedIn(true);
      const middlePosition = document.body.scrollHeight / 1.6;
      window.scrollTo({
        top: middlePosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/';
    }
  };

  const handleDash = () => {
    if (!isThere) {
      setIsThere(true);
      const middlePosition = document.body.scrollHeight / 1.5;
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
      <LogoContainer>
        <StyledLogo src="/prodigy-removebg-preview (1).png" alt="Prodigy Logo" />
      </LogoContainer>
      <SlidingHeading>
        ELEVATE YOUR POTENTIAL
        <br />
        Prodigy<span>Peak</span>
      </SlidingHeading>
      <NavLinks>
        <a href="/">
          <img src="/home-removebg-preview (1).png" alt="Home" />
          Home
        </a>
        <Button onClick={handleDash}>
          <img src="/horn-removebg-preview (2).png" alt="Horn" />
          Dashboard for registered students and teachers
        </Button>
        <a href="https://prodigytests.netlify.app/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/test-removebg-preview.png" alt="Test Series" />
          Test series
        </a>
        <a href="#bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight / 1.4, behavior: 'smooth' })}>
          <img src="/faq.png" alt="FAQS" />
          FAQS
        </a>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
