import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sessionDataStudent, sessionDataTeacher, testAssignmentsData } from './data'; // Import test/assignment data
import { userCodes } from './usercodes'; // Import user codes from the new file

// Define all styled components here
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  background-image: url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: rgba(28, 37, 54, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const SidebarItem = styled.div`
  padding: 15px;
  color: ${(props) => (props.active ? '#fff' : '#adb5bd')};
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const WelcomeMessage = styled.div`
  font-size: 1.5em;
  color: #333;
`;

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
`;

const CalendarButton = styled.a`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const AssignmentsSection = styled.div`
  margin-top: 20px;
`;

const AssignmentsHeader = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const AssignmentsTable = styled(Table)`
  margin-top: 0;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-image: url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg'); /* Background image for login */
  background-size: cover;
  background-position: center;
  color: white;
`;

const LoginForm = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState('');
  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    // Set current date when component mounts
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    setSelectedDate(today);
  }, []);

  const handleLogin = () => {
    const foundUser = Object.values(userCodes).find(user => user.code === inputCode);
    
    if (foundUser) {
      setIsAuthenticated(true);
      setRole(foundUser.role);
      setUserName(foundUser.name);
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole('');
    setUserName('');
    setInputCode('');
  };

  const renderDashboard = () => {
    const data = role === 'student' ? sessionDataStudent : sessionDataTeacher;
    const roleName = role === 'student' ? 'Student' : 'Tutor';
    const testsAndAssignments = role === 'teacher' ? testAssignmentsData : [];

    return (
      <Container>
        {/* Sidebar Navigation */}
        <Sidebar>
          <div>
            <SidebarItem active>Dashboard</SidebarItem>
            {role === 'teacher' && <SidebarItem>Exams/Tests</SidebarItem>}
          </div>
          <SidebarItem>{userName}<br />{roleName}</SidebarItem>
          <ExitButton onClick={handleLogout}>Exit</ExitButton>
        </Sidebar>

        {/* Main Content Area */}
        <MainContent>
          {/* Header */}
          <Header>
            <WelcomeMessage>
              Welcome {userName}!<br />
              Let's begin your journey to {role === 'student' ? 'learning' : 'training'} excellence.
            </WelcomeMessage>
            <DateSelector>
              {selectedDate}
              <CalendarButton href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
                View Calendar
              </CalendarButton>
            </DateSelector>
          </Header>

          {/* Session Table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Sessions</TableHeader>
                <TableHeader>Attendance</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Topics</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {data.map((session, index) => (
                <TableRow key={session.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {session.time}<br />
                    <ActionButton>{session.sessionType}</ActionButton><br />
                    {session.subject}
                  </TableCell>
                  <TableCell>{session.attendance}</TableCell>
                  <TableCell>{session.status}</TableCell>
                  <TableCell>{session.topics}</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          {/* Tests/Assignments Section */}
          {role === 'teacher' && (
            <AssignmentsSection>
              <AssignmentsHeader>Tests/Assignments</AssignmentsHeader>
              <AssignmentsTable>
                <TableHead>
                  <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Test/Assignment</TableHeader>
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Details</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {testsAndAssignments.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.details}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </AssignmentsTable>
            </AssignmentsSection>
          )}
        </MainContent>
      </Container>
    );
  };

  if (!isAuthenticated) {
    // Render the login form if not authenticated
    return (
      <LoginContainer>
        <LoginForm>
          <h1>Please Enter Access Code</h1>
          <input
            type="password"
            placeholder="Enter code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
          />
          <button onClick={handleLogin} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white' }}>
            Submit
          </button>
        </LoginForm>
      </LoginContainer>
    );
  }

  return renderDashboard();
};

export default Dashboard;
