// AuthContext.js

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // You might perform an API call or check a cookie to determine the user's login status
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/check-login');
        const data = await response.json();

        if (data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []); // Run this effect only once on component mount

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('/api/auth/google');
      const data = await response.json();
  
      if (data.success) {
        setIsLoggedIn(true);
      } else {
        console.error('Unexpected response:', data);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout');
      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleGoogleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
