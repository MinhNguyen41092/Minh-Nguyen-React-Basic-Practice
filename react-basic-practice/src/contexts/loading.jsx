import React, { useContext, useMemo, useState } from 'react';

const LoadingContext = React.createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);
  const valueContext = useMemo(() => ({
    loading,
    showLoading,
    hideLoading,
  }), [loading, showLoading, hideLoading]);

  return (
    <LoadingContext.Provider
      value={valueContext}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
