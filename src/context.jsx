import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useAppState } from "./state";

const AppContext = React.createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const { state, setImageToView, setImages, setIsLoading } = useAppState();
  const ctxValue = useMemo(() => {
    return {
      ...state,
      setImageToView,
      setImages,
      setIsLoading,
    };
  }, [JSON.stringify(state)]);

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
