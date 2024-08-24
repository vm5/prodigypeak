import React, { useState } from 'react';
import styled from 'styled-components';
import { studentData } from './data'; // Import the data from data.js
import { teacherData } from './data2'; // Import the data from teacherData.js

const StudentSection = () => {
  const [studentCode, setStudentCode] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [teacherCode, setTeacherCode] = useState('');
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [showTeacherDetails, setShowTeacherDetails] = useState(false);

  const handleStudentCodeSubmit = () => {
    const data = studentData[studentCode];
    if (data) {
      setStudentInfo(data);
      setShowStudentDetails(true);
    } else {
      alert('Invalid student code');
    }
  };

  const handleTeacherCodeSubmit = () => {
    const data = teacherData[teacherCode];
    if (data) {
      setTeacherInfo(data);
      setShowTeacherDetails(true);
    } else {
      alert('Invalid teacher code');
    }
  };

  return (
    <Container>
      <Section>
        <Heading>Dashboard for Registered Students</Heading>
        <Description>
          Welcome to ProdigyPeak's dashboard! Please enter the student code assigned to you to access your information.
        </Description>
        <Input
          type="text"
          placeholder="Enter your student code.."
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleStudentCodeSubmit}>Submit Code</Button>
        </ButtonContainer>

        {showStudentDetails && studentInfo && (
          <DetailsSection>
            <WelcomeMessage>Welcome, {studentInfo.name}!</WelcomeMessage>
            <Details>
              <DetailItem><strong>Batch:</strong> {studentInfo.batch}</DetailItem>
              <DetailItem><strong>Courses:</strong> {studentInfo.courses.join(', ')}</DetailItem>
              <DetailItem><strong>Board:</strong> {studentInfo.board}</DetailItem>
            </Details>

            <LinksSection>
              <LinkContainer>
                <LinkTitle>Classes</LinkTitle>
                <LinkPlaceholder>Link to Classes</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Deadlines</LinkTitle>
                <LinkPlaceholder>Link to Deadlines</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Submissions</LinkTitle>
                <LinkPlaceholder>Link to Submissions</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Assignment Dates</LinkTitle>
                <LinkPlaceholder>Link to Assignment Dates</LinkPlaceholder>
              </LinkContainer>
            </LinksSection>
          </DetailsSection>
        )}
      </Section>

      <Section>
        <Heading>Dashboard for Teachers</Heading>
        <Description>
          Welcome to ProdigyPeak's dashboard for teachers! Please enter the teacher code assigned to you to access your information.
        </Description>
        <Input
          type="text"
          placeholder="Enter your teacher code.."
          value={teacherCode}
          onChange={(e) => setTeacherCode(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleTeacherCodeSubmit}>Submit Code</Button>
        </ButtonContainer>

        {showTeacherDetails && teacherInfo && (
          <DetailsSection>
            <WelcomeMessage>Welcome, {teacherInfo.name}!</WelcomeMessage>
            <Details>
              <DetailItem><strong>Department:</strong> {teacherInfo.department}</DetailItem>
              <DetailItem>
                <strong>Classes Assigned for Today:</strong>
                <ClassList>
                  {teacherInfo.classesAssigned.map((classInfo, index) => (
                    <ClassItem key={index}>
                      {classInfo.time} - {classInfo.subject}
                    </ClassItem>
                  ))}
                </ClassList>
              </DetailItem>
            </Details>

            <LinksSection>
              <LinkContainer>
                <LinkTitle>Classes</LinkTitle>
                <LinkPlaceholder>Link to Classes</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Deadlines</LinkTitle>
                <LinkPlaceholder>Link to Deadlines</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Submissions</LinkTitle>
                <LinkPlaceholder>Link to Submissions</LinkPlaceholder>
              </LinkContainer>
              <LinkContainer>
                <LinkTitle>Assignment Dates</LinkTitle>
                <LinkPlaceholder>Link to Assignment Dates</LinkPlaceholder>
              </LinkContainer>
            </LinksSection>
          </DetailsSection>
        )}
      </Section>
    </Container>
  );
};

export default StudentSection;

/* Styled Components */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
  background: url('sky-2668711_1280.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Section = styled.div`
  margin-bottom: 40px;
  width: 100%;
  max-width: 800px;
  padding: 20px; /* Added padding */
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: #0073e6;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-out;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: white;
  margin-bottom: 20px;
  line-height: 1.6;
  animation: fadeIn 1.5s ease-out;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  animation: fadeIn 2s ease-out;
`;

const ButtonContainer = styled.div`
  margin-top: 20px; /* Added margin-top */
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #0073e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  animation: fadeIn 2.5s ease-out;

  &:hover {
    background-color: #005bb5;
    animation: spin 1s linear infinite;
  }
`;

const DetailsSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 3s ease-out;
`;

const WelcomeMessage = styled.h2`
  font-size: 2em;
  color: #0073e6;
  margin-bottom: 20px;
  animation: fadeIn 3.5s ease-out;
`;

const Details = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const DetailItem = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
`;

const LinksSection = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const LinkContainer = styled.div`
  margin-bottom: 15px;
`;

const LinkTitle = styled.h3`
  font-size: 1.5em;
  color: #0073e6;
  margin-bottom: 10px;
  animation: fadeIn 4s ease-out;
`;

const LinkPlaceholder = styled.p`
  font-size: 1.2em;
  color: #0073e6;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #005bb5;
  }
`;

const ClassList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ClassItem = styled.li`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 5px;
`;
