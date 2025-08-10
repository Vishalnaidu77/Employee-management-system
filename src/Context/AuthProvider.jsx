import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

// Auth Provider
function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on initial render
  useEffect(() => {
    const loadData = () => {
      try {
        const { employees } = getLocalStorage();
        setUserData(employees || []);
      } catch (error) {
        console.error('Error loading user data:', error);
        setUserData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Sync state changes to localStorage
  useEffect(() => {
    if (userData !== null) {
      localStorage.setItem('Employee', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData, isLoading]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
