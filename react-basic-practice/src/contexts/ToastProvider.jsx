import React, { useContext, useMemo, useState } from 'react';

const ToastContext = React.createContext();

const useToast = () => useContext(ToastContext);

const initialToast = {
  status: '',
  message: '',
  openPopup: false,
};

const ToastProvider = (props) => {
  const { children } = props;
  const [toast, setToast] = useState(initialToast);

  const valueContext = useMemo(() => ({
    toast, setToast,
  }), [toast]);

  return (
    <ToastContext.Provider
      value={valueContext}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { useToast, ToastProvider };
