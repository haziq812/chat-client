// src/context/FriendsContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a Context for Friends
const FriendsContext = createContext();

// Custom Hook to use the Friends Context
export const useFriends = () => {
    return useContext(FriendsContext);
};

// Friends Context Provider
export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFriends = async (token) => {

        
        try {
            const response = await axios.get("http://localhost:8000/api/friends", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching friends:", error.response?.data || error.message);
        }
    };

    return (
        <FriendsContext.Provider value={{ friends, loading, fetchFriends }}>
            {children}
        </FriendsContext.Provider>
    );
};
