import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Home = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  const handleLogout = () => {
    // Perform any necessary cleanup (e.g., remove token, reset state)
    navigate('/login'); // Navigate back to login page
  };

  return (
    <Container fluid className="mt-10">
        <Row>
            <Col>1 of 1</Col>
        </Row>
      <Row noGutters>
        {/* Sidebar (Offcanvas) */}
        <Col xs={12} md={3} className="bg-dark text-white">
          <Button
            variant="primary"
            className="d-md-none"
            onClick={handleSidebarShow}
          >
            Open Sidebar
          </Button>

          {/* Sidebar content */}
          <Offcanvas show={showSidebar} onHide={handleSidebarClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sidebar Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                <Nav.Link href="#profile" className="text-white">Profile</Nav.Link>
                <Nav.Link href="#messages" className="text-white">Messages</Nav.Link>
                <Nav.Link href="#settings" className="text-white">Settings</Nav.Link>
                <Nav.Link onClick={handleLogout} className="text-white">Logout</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        {/* Main Content Area */}
        <Col xs={12} md={9} className="p-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Welcome to the Home Page</h2>
              <p className="text-center mb-4">
                This is a simple and attractive home page after login.
                You can use this page for your main app content.
              </p>
              <div className="text-center">
                <Button variant="primary" onClick={handleLogout}>Logout</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
