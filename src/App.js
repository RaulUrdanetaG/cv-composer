import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";
import { PersonalInfoForm } from "./components/Personal-Info/PersonalInfoForm";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

import exampleData from "./data/example-data";
import EducationSection from "./components/Education/EducationSection";
import ExperienceSection from "./components/Experience/ExperienceSection";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [prevState, setPrevState] = useState(null);

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

  const toogleValue = (e, key) => {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((attr) => {
        setPrevState(Object.assign({}, attr));
        if (attr.id === id) attr[key] = !attr[key];
        return attr;
      }),
    });
  };

  const toogleHide = (e) => toogleValue(e, "isHidden");
  const toogleOpen = (e) => toogleValue(e, "isCollapsed");

  const createForm = (arrayName, object) => {
    setPrevState(null);
    // Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  };

  const createEducationForm = () => {
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uuid(),
    });
  };

  const createExperienceForm = () => {
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uuid(),
    });
  };

  const changePersonalInfo = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  const removeForm = (e) => {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  };

  const cancelForm = (e) => {
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  };

  return (
    <div className="app bg-slate-100 min-h-screen">
      <div className="flex justify-center gap-3 my-2.5">
        <div className="sections flex flex-col gap-5">
          <PersonalInfoForm
            personalInfo={personalInfo}
            onChange={changePersonalInfo}
          />
          <EducationSection
            educations={sections.educations}
            onChange={handleSectionChange}
            onHide={toogleHide}
            onOpen={toogleOpen}
            onCancel={cancelForm}
            onDelete={removeForm}
            onAdd={createEducationForm}
          />
          <ExperienceSection
            experiences={sections.experiences}
            onChange={handleSectionChange}
            onHide={toogleHide}
            onOpen={toogleOpen}
            onCancel={cancelForm}
            onDelete={removeForm}
            onAdd={createExperienceForm}
          />
        </div>
        <Preview
          personalInfo={personalInfo}
          education={sections.educations}
          experience={sections.experiences}
        />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
