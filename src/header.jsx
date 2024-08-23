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

const SlidingHeading = styled.h1`
  display: flex;
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
  width: 80px; /* Adjust size as needed */
  height: auto;

  @media (max-width: 768px) {
    width: 60px; /* Adjust size for medium screens */
  }

  @media (max-width: 480px) {
    width: 50px; /* Adjust size for small screens */
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > ul {
    display: block;
  }
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 12px 0;
  list-style: none;
  margin: 0;

  li {
    padding: 8px 12px;
    text-align: left;
    white-space: nowrap;
    font-size: 1rem;
  }

  li:hover {
    background-color: #f1f1f1;
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

const SignInButton = styled.button`
  position: fixed;
  top: 10px;
  right: 20px; /* Adjusted for better placement */
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Verdana';
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

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  

  const handleSignIn = () => {
    if (!isSignedIn) {
      setIsSignedIn(true);
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
      <SlidingHeading>
        <LogoContainer>
          <StyledLogo src="/prodigy-removebg-preview (1).png" alt="Prodigy Logo" />
        </LogoContainer>
        Prodigy<span>Peak</span>
      </SlidingHeading>
      <NavLinks>
        <a href="/">
          <img src="/home-removebg-preview (1).png" alt="Home" />
          Home
        </a>
        <a href="https://prodigyannouncements.netlify.app/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img src="/horn-removebg-preview (2).png" alt="Horn" />
          Announcements for registered students
        </a>
        <a href = "https://prodigytests.netlify.app/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img src="/test-removebg-preview.png" alt="Horn" />
          Test series
        </a>
        <Dropdown>
          <a href="/">
          <img src="/book-removebg-preview.png" alt="Book" />
            Courses Offered
          </a>
          <DropdownContent>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
            <li>Career Guidance (new)</li>
          </DropdownContent>
        </Dropdown>
        <a href="#bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight / 1.4, behavior: 'smooth' })}>
          <img src="/faq.png" alt="FAQS" />
          FAQS
        </a>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
