import React from "react";

import PersonalInfoPreview from "./Personal-Info/PersonalInfoPreview";
import EducationPreview from "./Education/EducationPreview";
import ExperiencePreview from "./Experience/ExperiencePreview";

const Preview = ({ personalInfo, education, experience }) => {
  return (
    <>
      <div className="preview flex-col bg-white shadow-2xl">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview education={education} />
        <ExperiencePreview experience={experience}/>
      </div>
    </>
  );
};

export default Preview;
