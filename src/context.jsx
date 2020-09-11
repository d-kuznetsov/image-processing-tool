import React, { useContext, useMemo } from "react";
import { useAppState } from "./state";

const AppContext = React.createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const { state, setImageToView, setImages, setIsLoading } = useAppState();
  const ctxValue = useMemo(
    () => ({
      ...state,
      setImageToView,
      setImages,
      setIsLoading,
    }),
    [state]
  );

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
