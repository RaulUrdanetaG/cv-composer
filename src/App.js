import React from "react";
import { useState } from "react";

import "./App.css";
import { PersonalInfoForm } from "./components/Personal-Info/PersonalInfoForm";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

import exampleData from "./data/example-data";
import EducationSection from "./components/Education/EducationSection";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  const changePersonalInfo = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  return (
    <div className="app bg-slate-100 h-screen">
      <div className="flex justify-center gap-3 my-2.5">
        <div className="sections flex flex-col">
          <PersonalInfoForm
            personalInfo={personalInfo}
            onChange={changePersonalInfo}
          />
          <EducationSection
            educations={sections.educations}
            onChange={handleSectionChange}
          />
        </div>
        <Preview
          personalInfo={personalInfo}
          education={sections.educations}
          experience={exampleData.sections.experiences}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
