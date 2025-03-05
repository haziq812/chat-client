// src/pages/FriendListPage.js

import React, { useEffect } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFriends } from "../context/FriendsContext";
import { useAuth } from "../context/AuthContext";

const FriendListPage = () => {
    const { friends, loading, fetchFriends } = useFriends();
    const { token } = useAuth(); // Use token from context
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            fetchFriends(token);
        }
    }, [token, fetchFriends]);

    const handleRemoveFriend = (friendId) => {
        // Call remove friend API here
    };

    return (
        <div>
            <h2>My Friends</h2>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friends.map((friend) => (
                            <tr key={friend.id}>
                                <td>{friend.name}</td>
                                <td>{friend.status}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleRemoveFriend(friend.friend_id)}
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Button onClick={() => navigate("/add-friend")}>Add Friend</Button>
        </div>
    );
};

export default FriendListPage;
