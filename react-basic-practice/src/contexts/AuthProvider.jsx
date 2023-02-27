import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getUserById } from '@/services/Users';

const AuthContext = React.createContext();
const useAuth = () => useContext(AuthContext);

const initialState = {
  userId: localStorage.getItem('auth') || '',
  username: '',
  email: '',
};

const AuthProvider = (props) => {
  const { children } = props;
  const [userData, setUserData] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserById(userData.userId);
        const user = {
          userId: userData.userId,
          username: data.username || '',
          email: data.email || '',
        };
        setUserData(user);
      } catch {
        setUserData({});
      }
    };

    getData();
  }, [userData.userId]);

  const valueContext = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData.userId],
  );

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
