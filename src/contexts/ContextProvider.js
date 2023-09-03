import { click } from "@testing-library/user-event/dist/click";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  personalInfo: false,
  education: false,
  experience: false,
};

export const ContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
