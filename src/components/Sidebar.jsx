import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', height: '100vh', backgroundColor: '#343a40' }} className="d-flex flex-column">
            <Nav className="flex-column p-3">
                <h4 className="text-white mb-4">Dashboard</h4>
                <Link to="/home" className="text-white mb-3">Home</Link>
                <Link to="/friends" className="text-white mb-3">Friend List</Link>
                <Link to="/add-friend" className="text-white mb-3">Add Friend</Link>
                <Link to="/chat" className="text-white mb-3">Chat</Link>
                <Link to="/profile" className="text-white mb-3">Profile</Link>
                {/* Add more links here as needed */}
            </Nav>
        </div>
    );
};

export default Sidebar;
