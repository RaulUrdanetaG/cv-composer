import React from "react";
import { useState } from "react";

import "./App.css";
import { PersonalInfoForm } from "./components/Personal-Info/PersonalInfoForm";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import { useStateContext } from "./contexts/ContextProvider";

import exampleData from "./data/example-data";

const App = () => {
  const { activeSection } = useStateContext();

  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  const changePersonalInfo = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  return (
    <div className="app bg-slate-100 h-screen">
      <div className="flex justify-center gap-3">
        <div className="sections flex flex-col">
          <PersonalInfoForm
            personalInfo={personalInfo}
            onChange={changePersonalInfo}
          />
        </div>
        <Preview personalInfo={personalInfo} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
