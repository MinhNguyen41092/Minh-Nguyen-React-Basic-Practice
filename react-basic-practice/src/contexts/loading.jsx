import React, { useContext, useMemo, useState } from 'react';

const LoadingContext = React.createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const changeStatusLoading = () => {
    if (loading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };
  const valueContext = useMemo(() => ({
    loading,
    changeStatusLoading,
  }), [loading]);

  return (
    <LoadingContext.Provider
      value={valueContext}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
