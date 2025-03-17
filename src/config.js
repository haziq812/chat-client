// src/config.js
const config = {
    // Backend API URL (Laravel API URL)
    API_URL: "https://nuansaco.com/api", // Your Laravel API URL, make sure this matches your Laravel routes
  
    // WebSocket URL for real-time communication (if you are using WebSockets)
    //SOCKET_URL: "wss://nuansaco.com/socket", // Update this with your WebSocket URL if needed
  
    // Authentication Token Key for JWT-based authentication
    //AUTH_TOKEN_KEY: "auth_token", // LocalStorage or SessionStorage key to store JWT token
  
    // Example of another configuration (optional)
    //TIMEOUT: 5000, // Timeout duration for requests (in milliseconds)
    
    // Enable/disable features in your app
    //ENABLE_CHAT: true, // Example: Enable/disable chat feature in your app
  
    // Your project's environment (can be 'development', 'production', etc.)
    //ENV: process.env.REACT_APP_ENV || 'production', // Get from environment variables (or default to 'production')
  
    // API keys for third-party services
    //GOOGLE_API_KEY: "your-google-api-key", // Replace with your actual key
    //STRIPE_API_KEY: "your-stripe-api-key", // Replace with your actual key
  };
  
  export default config;
  