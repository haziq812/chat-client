// src/pages/Chat.jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:3000');

const Chat = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch messages when the component mounts
    axios
      .get('http://localhost:8000/api/messages', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => setMessages(response.data))
      .catch((error) => console.error(error));

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off('receiveMessage');
  }, [token]);

  const handleSendMessage = () => {
    const newMessage = { message: input };

    // Send message to the server
    axios
      .post('http://localhost:8000/api/messages', newMessage, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        socket.emit('sendMessage', newMessage);
        setInput('');
      })
      .catch((error) => console.error('Failed to send message', error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Chat Room</h3>
              <div className="chat-box" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                  <div key={index} className="chat-message">
                    <p>{msg.message}</p>
                  </div>
                ))}
              </div>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
