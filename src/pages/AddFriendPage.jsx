// src/pages/AddFriendPage.js

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const AddFriendPage = () => {
    const [friendEmail, setFriendEmail] = useState("");
    const [error, setError] = useState(null);
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleAddFriend = async (e) => {
        e.preventDefault();
        if (!friendEmail) {
            setError("Please enter a friend's email");
            return;
        }
        try {
            await axios.post(
                `http://your-backend-api-url/api/friends/${friendEmail}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            navigate("/friends"); // Redirect after successful request
        } catch (err) {
            setError("Error sending friend request");
        }
    };

    return (
        <div>
            <h2>Add a New Friend</h2>
            <Form onSubmit={handleAddFriend}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Friend's Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={friendEmail}
                        onChange={(e) => setFriendEmail(e.target.value)}
                    />
                </Form.Group>
                {error && <div className="text-danger">{error}</div>}
                <Button variant="primary" type="submit">
                    Send Request
                </Button>
            </Form>
        </div>
    );
};

export default AddFriendPage;
