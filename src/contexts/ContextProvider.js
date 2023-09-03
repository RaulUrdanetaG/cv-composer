import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  personalInfo: false,
  education: false,
  experience: false,
};

export const ContextProvider = ({ children }) => {
  const [activePersonal, setActivePersonal] = useState(true);

  return (
    <StateContext.Provider value={{ activePersonal }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
