import React, { useContext, useMemo, useState } from 'react';

const PopupContext = React.createContext();

const usePopup = () => useContext(PopupContext);

const PopupProvider = (props) => {
  const { children } = props;
  const [isSuccess, setIsSuccess] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const valueContext = useMemo(() => ({
    openPopup,
    setOpenPopup,
    isSuccess,
    setIsSuccess,
  }), [openPopup, isSuccess]);

  return (
    <PopupContext.Provider
      value={valueContext}
    >
      {children}
    </PopupContext.Provider>
  );
};

export { usePopup, PopupProvider };
