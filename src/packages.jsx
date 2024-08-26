import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled, { keyframes } from 'styled-components';

// EnrollPage Component
const EnrollPage = () => {
  const [formData, setFormData] = useState(
    packages.reduce((acc, pkg) => ({
      ...acc,
      [pkg.name]: {
        name: '',
        email: '',
        phone: '',
        courses: [],
        board: '',
        message: '',
      }
    }), {})
  );

  const [isSuccess, setIsSuccess] = useState({});

  const handleChange = (pkgName, e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [pkgName]: {
          ...prevState[pkgName],
          courses: checked
            ? [...prevState[pkgName].courses, value]
            : prevState[pkgName].courses.filter(course => course !== value),
        },
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [pkgName]: {
          ...prevState[pkgName],
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = (pkgName, e) => {
    e.preventDefault();

    const data = {
      ...formData[pkgName],
      packageName: pkgName
    };

    emailjs.send('service_1n40l6w', 'template_9cx5776', data, '6nOOASpoY_MKxgook')
      .then(() => {
        setIsSuccess(prevState => ({
          ...prevState,
          [pkgName]: true
        }));
        setFormData(prevState => ({
          ...prevState,
          [pkgName]: {
            name: '',
            email: '',
            phone: '',
            courses: [],
            board: '',
            message: '',
          }
        }));
      })
      .catch(() => {
        setIsSuccess(prevState => ({
          ...prevState,
          [pkgName]: false
        }));
      });
  };

  return (
    <PageWrapper>
      <PackagesContainer>
        <PackagesTitle>Explore Our Packages</PackagesTitle>
        <PackagesList>
          {packages.map((pkg, index) => (
            <PackageCard key={index}>
              <PackageName>{pkg.name}</PackageName>
              <PackageDescription>{pkg.description}</PackageDescription>
              <PackageFeatures>
                {pkg.features.map((feature, i) => (
                  <Feature key={i}>
                    <Checkmark>✔</Checkmark>
                    {feature}
                  </Feature>
                ))}
              </PackageFeatures>
              <EnrollForm onSubmit={(e) => handleSubmit(pkg.name, e)}>
                <InputField>
                  <label htmlFor={`name-${pkg.name}`}>Name:</label>
                  <input
                    type="text"
                    id={`name-${pkg.name}`}
                    name="name"
                    value={formData[pkg.name]?.name || ''}
                    onChange={(e) => handleChange(pkg.name, e)}
                    required
                  />
                </InputField>

                <InputField>
                  <label htmlFor={`email-${pkg.name}`}>Email:</label>
                  <input
                    type="email"
                    id={`email-${pkg.name}`}
                    name="email"
                    value={formData[pkg.name]?.email || ''}
                    onChange={(e) => handleChange(pkg.name, e)}
                    required
                  />
                </InputField>

                <InputField>
                  <label htmlFor={`phone-${pkg.name}`}>Phone:</label>
                  <input
                    type="tel"
                    id={`phone-${pkg.name}`}
                    name="phone"
                    value={formData[pkg.name]?.phone || ''}
                    onChange={(e) => handleChange(pkg.name, e)}
                    required
                  />
                </InputField>

                <InputField>
                  <label>Courses:</label>
                  <CheckboxContainer>
                    {['Physics', 'Chemistry', 'Math', 'Career Guidance'].map(course => (
                      <Checkbox key={course}>
                        <input
                          type="checkbox"
                          id={`${course}-${pkg.name}`}
                          name="courses"
                          value={course}
                          onChange={(e) => handleChange(pkg.name, e)}
                          checked={formData[pkg.name]?.courses.includes(course) || false}
                        />
                        <span className="checkmark"></span>
                        <label htmlFor={`${course}-${pkg.name}`}>{course}</label>
                      </Checkbox>
                    ))}
                  </CheckboxContainer>
                </InputField>

                <InputField>
                  <label htmlFor={`board-${pkg.name}`}>Board:</label>
                  <select
                    id={`board-${pkg.name}`}
                    name="board"
                    value={formData[pkg.name]?.board || ''}
                    onChange={(e) => handleChange(pkg.name, e)}
                    required
                  >
                    <option value="">Select your board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                  </select>
                </InputField>

                <InputField>
                  <label htmlFor={`message-${pkg.name}`}>Additional queries (if any):</label>
                  <textarea
                    id={`message-${pkg.name}`}
                    name="message"
                    value={formData[pkg.name]?.message || ''}
                    onChange={(e) => handleChange(pkg.name, e)}
                    rows="4"
                  />
                </InputField>

                <SubmitButton type="submit">Enroll Now</SubmitButton>

                {isSuccess[pkg.name] === true && <SuccessMessage>Your enrollment request for {pkg.name} has been sent successfully!</SuccessMessage>}
                {isSuccess[pkg.name] === false && <ErrorMessage>There was an error submitting your request for {pkg.name}. Please try again.</ErrorMessage>}
              </EnrollForm>
            </PackageCard>
          ))}
        </PackagesList>
      </PackagesContainer>
    </PageWrapper>
  );
};

// Packages Data
const packages = [
  {
    name: "Basic Package",
    description: "Includes essential practice materials and resources.",
    features: [
      "Test series"
    ]
  },
  {
    name: "Standard Package",
    description: "Offers in-depth coverage with additional resources and support.",
    features: [
      "Doubt clearing sessions",
      "Test series",
      "Counselling"
    ]
  },
  {
    name: "Premium Package",
    description: "Comprehensive support with personalized attention and extensive resources.",
    features: [
      "Live one-on-one class",
      "Doubt clearing sessions",
      "Test series",
      "Counselling"
    ]
  }
];

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

const PackagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between package cards */
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
`;

const PackageFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const Feature = styled.li`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkmark = styled.span`
  color: #28a745;
  margin-right: 10px;
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
