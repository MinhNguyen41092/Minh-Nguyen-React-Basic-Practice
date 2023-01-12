import React, { useContext, useMemo, useState } from 'react';

const ToastContext = React.createContext();

const useToast = () => useContext(ToastContext);

const ToastProvider = (props) => {
  const { children } = props;
  const [status, setStatus] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [message, setMessage] = useState('');

  const valueContext = useMemo(() => ({
    openPopup,
    setOpenPopup,
    status,
    setStatus,
    message,
    setMessage,
  }), [openPopup, status, message]);

  return (
    <ToastContext.Provider
      value={valueContext}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { useToast, ToastProvider };