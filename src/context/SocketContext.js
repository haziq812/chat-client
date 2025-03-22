import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// Connect to WebSocket server
const SOCKET_SERVER_URL = "http://146.190.103.177:3001";
const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    
    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        newSocket.on("connect", () => {
            console.log("Connected to WebSocket:", newSocket.id);
        });

        newSocket.on("message", (data) => {
            console.log("Received message:", data);
        });

        return () => newSocket.close();
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
