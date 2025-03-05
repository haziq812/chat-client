import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Navbar /> {/* Top Navbar */}
            <Container fluid className="d-flex">
                {/* Sidebar on the left */}
                <Col xs={3} className="p-0">
                    <Sidebar />
                </Col>

                {/* Content Area on the right */}
                <Col xs={9} className="p-4">
                    {children} {/* Dynamic content goes here (Home, Chat, etc.) */}
                </Col>
            </Container>
        </div>
    );
};

export default DashboardLayout;
