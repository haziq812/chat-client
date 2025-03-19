import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
import { FriendsProvider } from './context/FriendsContext';
import { SocketProvider } from "./context/SocketContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketProvider>
    <React.StrictMode>
      <BrowserRouter>  
      <AuthProvider>
        <FriendsProvider>
          <App />
        </FriendsProvider>
      </AuthProvider>
      </BrowserRouter>,
    </React.StrictMode>
  </SocketProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
