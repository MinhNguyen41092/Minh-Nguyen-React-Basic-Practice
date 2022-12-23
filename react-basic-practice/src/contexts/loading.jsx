import React, { useContext, useMemo, useState } from 'react';

const LoadingContext = React.createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const show = () => setLoading(true);
  const hide = () => setLoading(false);
  const valueContext = useMemo(() => ({
    loading,
    show,
    hide,
  }), [loading, show, hide]);

  return (
    <LoadingContext.Provider
      value={valueContext}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
