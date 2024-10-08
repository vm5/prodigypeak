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

// Styled components
const FooterContainer = styled.footer`
  background: #121212; /* Darker background for modern look */
  color: #f1f1f1;
  padding: 60px 20px;
  text-align: center;
  border-top: 1px solid #333;
  width: 100%;
  font-family: 'Verdana', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;
const GetStarted = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: #6a1b9a;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 8px;
`;

const Divider = styled.hr`
  margin: 40px auto;
  width: 80%;
  border: 0;
  border-top: 2px solid #444;
`;


const AdditionalContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
  animation: ${slideIn} 1s ease-out;
  text-align: center;
  max-width: 800px;

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

  @media (max-width: 480px) {
    font-size: 14px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 30px auto;
  display: block;
  
  @media (max-width: 768px) {
    width: 130px;
  }
  
  @media (max-width: 480px) {
    width: 110px;
  }
`;

const FAQSection = styled.section`
  margin-bottom: 60px;
  width: 100%;
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

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
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

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    padding: 15px;
  }
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
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 25px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
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

    &::placeholder {
      color: #bbb;
    }
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

  @media (max-width: 480px) {
    button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #aaa;

  p {
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.9rem;
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
  z-index: 100000; /* Keep it on top of other content */
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
      <GetStarted>Get In Touch</GetStarted>
      <p>We would love to hear from you to give you our best service!</p>
      
      <Divider />
      <FAQSection>
        <FAQTitle>FREQUENTLY ASKED QUESTIONS</FAQTitle>
        <FAQSubtitle>Get all your queries answered!</FAQSubtitle>
        <FAQContainer>
          <FAQBox>
            <Question>What subjects are offered?</Question>
            <Answer>We offer Physics, Chemistry, and Mathematics for grades 8 to 12.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Who are the teachers?</Question>
            <Answer>Our teachers are highly qualified and experienced in their respective subjects. They have a proven track record of helping students achieve excellent academic results.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How are the classes conducted?</Question>
            <Answer>Our classes are conducted live through an online platform, allowing students to interact with teachers in real-time.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What are the class schedule?</Question>
            <Answer>Classes are scheduled after school hours and on weekends to accommodate students' regular school activities.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Do you provide study materials?</Question>
            <Answer>Yes, we provide comprehensive study materials, including notes, assignments, and practice questions.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Can I attend a demo class before enrolling?</Question>
            <Answer>Absolutely! We offer free demo classes for each subject. This allows you to experience our teaching style and decide if it's the right fit for you.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How are doubts clarified during the classes?</Question>
            <Answer>Students can ask questions during the live sessions, and there is also a dedicated doubt-clearing session every week. Additionally, students can post their questions on our forum, where teachers  provide answers.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Is there any provision for mock tests or exams?</Question>
            <Answer>Yes, we conduct regular mock tests and practice exams to help students prepare for their school exams and competitive exams. Detailed feedback is provided to help students improve.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What is our track record?</Question>
            <Answer>Our teachers have a strong track record of teaching board toppers in a traditional online setup and come with years of experience in the education field. We are committed to providing high-quality education and are confident that students will see significant improvement after joining our classes.</Answer>
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
        <Logo src="/prodigy-removebg-preview (1).png" alt="ProdigyPeak Logo" />
        <p>Welcome to our Prodigy Peak. We provide personalized learning experiences to help you excel academically. Join us to start your journey to success!</p>
      </AdditionalContent>

      <FeedbackSection>
        <FeedbackTitle>Give Us Your Feedback</FeedbackTitle>
        <FeedbackDescription>Your feedback helps us improve. Let us know how we're doing or suggest any improvements you would like to see.</FeedbackDescription>
        <FeedbackForm onSubmit={handleSubmit}>
          <textarea
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </FeedbackForm>
        {status && <p>{status}</p>}
      </FeedbackSection>

      <LinkContainer>
        <StyledLink href="mailto:prodigypeak1.0@gmail.com">
          <img src="/gmail-removebg-preview.png" alt="Mail" />
          Mail us your queries at prodigypeak1.0@gmail.com 
        </StyledLink>
        <StyledLink>
        <img src="/contactus-removebg-preview.png" alt = "contact" />
        Contact us at (+91) 8951475102
        </StyledLink>
      </LinkContainer>


      <FooterBottom>
        <p>&copy; 2024 Prodigy<HighlightedText>Peak</HighlightedText>. All rights reserved.</p>
        <p>Version v1.0.0</p>
      </FooterBottom>

      <FloatingWhatsAppButton href="https://wa.me/918951475102" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
        Chat with us
      </FloatingWhatsAppButton>
    </FooterContainer>
  );
};

export default Footer;
