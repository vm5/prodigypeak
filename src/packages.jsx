import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled, { keyframes } from 'styled-components';

// EnrollPage Component
const EnrollPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
    board: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        courses: checked
          ? [...prevState.courses, value]
          : prevState.courses.filter(course => course !== value),
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_1n40l6w', 'template_9cx5776', formData, '6nOOASpoY_MKxgook')
      .then(() => {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          courses: [],
          board: '',
          message: '',
        });
      })
      .catch(() => {
        setIsSuccess(false);
      });
  };

  return (
    <PageWrapper>
      <PackagesContainer>
        <PackagesTitle>Enroll into ProdigyPeak today!</PackagesTitle>
        <PackageCard>
          <PackageName>Comprehensive Course Plan</PackageName>
          <PackageDescription>Includes extensive resources and personalized support.</PackageDescription>
          <PackageDescription>Live one on one classes.</PackageDescription>
          <PackageDescription>Intensive course material and tests with personal attention.</PackageDescription>
          <PackageDescription>Fill in the following details to enroll now!</PackageDescription>
          <EnrollForm onSubmit={handleSubmit}>
            <InputField>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputField>

            <InputField>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputField>

            <InputField>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </InputField>

            <InputField>
              <label>Courses that you want to enroll for:</label>
              <CheckboxContainer>
                {['Physics', 'Chemistry', 'Mathematics'].map(course => (
                  <Checkbox key={course}>
                    <input
                      type="checkbox"
                      id={course}
                      name="courses"
                      value={course}
                      onChange={handleChange}
                      checked={formData.courses.includes(course)}
                    />
                    <span className="checkmark"></span>
                    <label htmlFor={course}>{course}</label>
                  </Checkbox>
                ))}
              </CheckboxContainer>
            </InputField>

            <InputField>
              <label htmlFor="board">Board:</label>
              <select
                id="board"
                name="board"
                value={formData.board}
                onChange={handleChange}
                required
              >
                <option value="">Select your board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
              </select>
            </InputField>

            <InputField>
              <label htmlFor="message">Additional queries (if any):</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </InputField>

            <SubmitButton type="submit">Enroll Now</SubmitButton>

            {isSuccess && <SuccessMessage>Your enrollment request has been sent successfully!</SuccessMessage>}
            {!isSuccess && <ErrorMessage>There was an error submitting your request. Please try again.</ErrorMessage>}
          </EnrollForm>
        </PackageCard>
      </PackagesContainer>
    </PageWrapper>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: url('sky-2668711_1280.jpg') no-repeat center center;
  background-size: cover;
  animation: ${moveBackground} 15s ease infinite;
  padding: 20px;
  z-index: 1;
`;

const PackagesContainer = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 900px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const PackagesTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  animation: ${slideDown} 0.6s ease;
`;

const PackageCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideDown} 0.8s ease;
`;

const PackageName = styled.h3`
  font-size: 1.75rem;
  color: #007BFF;
  margin-bottom: 10px;
`;

const PackageDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  font-weight: bold;
  font-family:'Verdana';
`;

const EnrollForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input, select, textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    &:focus {
      border-color: #007BFF;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
  }

  label {
    font-weight: bold;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 10px;
  }

  .checkmark {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background: #f0f0f0;
    border: 1px solid #ccc;
    position: relative;

    input:checked + .checkmark {
      background: #007BFF;
      border: none;
    }

    input:checked + .checkmark::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      background: #fff;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: #28a745;
  font-weight: bold;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-weight: bold;
  margin-top: 10px;
`;

export default EnrollPage;
