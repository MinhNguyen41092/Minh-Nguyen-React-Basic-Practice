import React, { useContext, useMemo, useState } from 'react';

const LoadingContext = React.createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);

  const valueContext = useMemo(() => ({
    loading,
    setLoading,
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
