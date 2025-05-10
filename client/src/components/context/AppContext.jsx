import { createContext, useState } from 'react';

export const AppContent = createContext();

export const AppContextProvider = props => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(false);

  const value = { backendUrl, isLogin, setIsLogin, userData, setUserData };

  return (
    <AppContent.Provider value={value}>{props.childreb}</AppContent.Provider>
  );
};
