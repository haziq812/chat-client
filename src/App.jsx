import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Make sure you import your Navbar component
import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chat';
import FriendList from './pages/FriendListPage';
import AddFriend from './pages/AddFriendPage';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from './pages/DashboardLayout'; // Import the DashboardLayout
import ProtectedRoute from './components/ProtectedRoute'; 

const App = () => {
    // Define token state to keep track of the login token
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    // Handle login: store token in localStorage
    const handleLogin = (newToken) => {
        localStorage.setItem('token', newToken);  // Save token to localStorage
        setToken(newToken);  // Update state
    };

    // Handle logout: remove token from localStorage
    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token from localStorage
        setToken('');  // Clear token from state
    };

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route 
                    path="/home" 
                    element={token ? (
                        <DashboardLayout>
                            <Home token={token} />
                        </DashboardLayout>
                    ) : <Navigate to="/login" />} 
                />
                <Route 
                    path="/friends" 
                    element={token ? (
                        <DashboardLayout>
                            <FriendList />
                        </DashboardLayout>
                    ) : <Navigate to="/login" />}
                />
                <Route 
                    path="/add-friend" 
                    element={token ? (
                        <DashboardLayout>
                            <AddFriend />
                        </DashboardLayout>
                    ) : <Navigate to="/login" />}
                />
                <Route 
                    path="/chat" 
                    element={token ? (
                        <DashboardLayout>
                            <Chat token={token} />
                        </DashboardLayout>
                    ) : <Navigate to="/login" />} 
                />

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
};

export default App;
