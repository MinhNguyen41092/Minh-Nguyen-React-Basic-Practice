import React, { useContext, useMemo, useState } from 'react';

const AuthContext = React.createContext();
const useAuth = () => useContext(AuthContext);


const AuthProvider = (props) => {
  const userIdLocal = localStorage.getItem('auth');
  const { children } = props;
  const { userId, setUserId } = useState(userIdLocal);
  console.log(userId);
  const valueContext = useMemo(() => ({
    userId,
    setUserId,
  }), [userId]);

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
