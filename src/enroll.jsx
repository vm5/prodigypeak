import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled, { keyframes } from 'styled-components';

const EnrollPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
    board: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        courses: checked
          ? [...prevState.courses, value]
          : prevState.courses.filter((course) => course !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_1n40l6w', 'template_9cx5776', formData, '6nOOASpoY_MKxgook')
      .then((response) => {
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
      .catch((err) => {
        setIsSuccess(false);
      });
  };

  return (
    <PageWrapper>
      <EnrollContainer>
        <EnrollTitle>
          Enroll into Prodigy Peak now!
          <EnrollSubtitle />
        </EnrollTitle>
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
            <label>Courses:</label>
            <CheckboxContainer>
              <label>
                <input
                  type="checkbox"
                  name="courses"
                  value="Physics"
                  onChange={handleChange}
                  checked={formData.courses.includes('Physics')}
                />
                Physics
              </label>
              <label>
                <input
                  type="checkbox"
                  name="courses"
                  value="Chemistry"
                  onChange={handleChange}
                  checked={formData.courses.includes('Chemistry')}
                />
                Chemistry
              </label>
              <label>
                <input
                  type="checkbox"
                  name="courses"
                  value="Math"
                  onChange={handleChange}
                  checked={formData.courses.includes('Math')}
                />
                Math
              </label>
              <label>
                <input
                  type="checkbox"
                  name="courses"
                  value="Counselling"
                  onChange={handleChange}
                  checked={formData.courses.includes('Counselling')}
                />
                Counselling
              </label>
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

          <SubmitButton type="submit">Submit</SubmitButton>

          {isSuccess === true && <SuccessMessage>Your enrollment request has been sent! We will connect with you soon.</SuccessMessage>}
          {isSuccess === false && <ErrorMessage>Something went wrong, please try again.</ErrorMessage>}
        </EnrollForm>
      </EnrollContainer>
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

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('sky-2668711_1280.jpg') no-repeat center center;
  background-size: cover; /* Ensure the image covers the entire area */
  animation: ${moveBackground} 15s ease infinite;
  padding: 20px;
  z-index: 1;
`;


const EnrollContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const EnrollTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  animation: ${slideDown} 0.6s ease;
`;

const EnrollSubtitle = styled.hr`
  width: 50px;
  height: 3px;
  background-color: #333;
  border: none;
  margin: 10px auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const EnrollForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }

  input, textarea, select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      border-color: #28a745;
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;

  label {
    font-weight: normal;
    font-size: 1rem;

    input {
      margin-right: 8px;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled.p`
  color: #28a745;
  text-align: center;
  font-weight: bold;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  text-align: center;
  font-weight: bold;
  animation: ${fadeIn} 1s ease-in-out;
`;

export default EnrollPage;
