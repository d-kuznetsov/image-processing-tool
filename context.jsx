import React, { useContext } from "react";
import { useAppState } from "./state";

const AppContext = React.createContext("");

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const { state, setImageToView, setImages } = useAppState();

  return (
    <AppContext.Provider value={{ ...state, setImageToView, setImages }}>
      {children}
    </AppContext.Provider>
  );
}
