import React from 'react';
import { Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // Call the logout function passed via props
        navigate('/login'); // Redirect to the login page
    };

    return (
        <BSNavbar bg="dark" variant="dark" expand="lg">
            <BSNavbar.Brand href="/home">Dashboard</BSNavbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/friends">Friends</Nav.Link>
                <Nav.Link href="/add-friend">Add Friend</Nav.Link>
                <Nav.Link href="/chat">Chat</Nav.Link>
                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            </Nav>
        </BSNavbar>
    );
};

export default Navbar;
