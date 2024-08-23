import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #444;
  position: relative;
  width: 100%;
  font-family: 'Verdana', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const AdditionalContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
  animation: ${slideIn} 1s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  p {
    margin-top: 20px;
    color: #ccc;
    line-height: 1.5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: lightblue;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    color: yellow;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 30px auto;
  display: block;
`;

const Lineup = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #ccc;
  animation: ${appear} 1s ease-in;

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const FAQSection = styled.section`
  margin-bottom: 60px;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease-out;
`;

const FAQSubtitle = styled.h5`
  font-size: 1.5rem;
  color: #bbb;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FAQBox = styled.div`
  background: #1c1c1c;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;
  width: 100%;
  max-width: 300px;
  color: #ddd;
`;

const Question = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #6a1b9a;
`;

const Answer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FeedbackSection = styled.section`
  margin-bottom: 60px;
  background: #2c2c2c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
`;

const FeedbackDescription = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  textarea {
    width: 100%;
    max-width: 600px;
    height: 150px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #444;
    background: #333;
    color: #fff;
    resize: vertical;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #6a1b9a;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #8e24aa;
    }
  }
`;

const FloatingWhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366; /* WhatsApp green */
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #128c7e; /* Darker WhatsApp green */
    transform: translateY(-3px);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;


const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ii20a5', 'template_fpxg518', e.target, 'U0Y3d6YQ3IXTIXliH')
      .then((result) => {
        setStatus('Feedback submitted successfully!');
        setFeedback('');
      }, (error) => {
        setStatus('An error occurred. Please try again.');
      });
  };

  return (
    <FooterContainer>
      <FAQSection>
        <FAQTitle>FREQUENTLY ASKED QUESTIONS</FAQTitle>
        <FAQSubtitle>Get all your queries answered!</FAQSubtitle>
        <FAQContainer>
          <FAQBox>
            <Question>What subjects are offered?</Question>
            <Answer>We offer Physics, Chemistry and Mathematics for grades 8 to 12.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Are the classes online or in-person?</Question>
            <Answer>We offer online classes.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What are the class timings?</Question>
            <Answer>Class timings are flexible and can be adjusted based on your schedule.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How can I enroll?</Question>
            <Answer>You can enroll by signing up on our website or contacting us directly.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What are the fees?</Question>
            <Answer>Fees vary depending on the subject and duration. Please contact us for more details.</Answer>
          </FAQBox>
        </FAQContainer>
      </FAQSection>

      <AdditionalContent>
        <Logo src="/prodigy-removebg-preview (1).png" alt="prodigypeak Logo" />
        <p>Welcome to our Prodigy Peak. We provide personalized learning experiences to help you excel academically. Join us to start your journey to success!</p>
      </AdditionalContent>

      <FeedbackSection>
        <FeedbackTitle>Give Us Your Feedback</FeedbackTitle>
        <FeedbackDescription>Your feedback helps us improve. Let us know how we're doing or suggest any improvements you would like to see.</FeedbackDescription>
        <FeedbackForm onSubmit={handleSubmit}>
          <textarea name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Enter your feedback here..." required></textarea>
          <button type="submit">Submit Feedback</button>
        </FeedbackForm>
        {status && <p>{status}</p>}
      </FeedbackSection>
      <LinkContainer>
          <StyledLink href="mailto:prodigypeak1.0@gmail.com">
            <img src="/gmail-removebg-preview.png" alt="Mail" />
            Mail us your queries at prodigypeak1.0@gmail.com
          </StyledLink>
        </LinkContainer>
        <p>&copy; 2024 Prodigy<HighlightedText>Peak</HighlightedText>. All rights reserved.</p>

      <FloatingWhatsAppButton href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
        Chat with us
      </FloatingWhatsAppButton>
    </FooterContainer>
  );
};

export default Footer;
