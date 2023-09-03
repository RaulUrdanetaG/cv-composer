import React from "react";

import PersonalInfoPreview from "./Personal-Info/PersonalInfoPreview";

const Preview = ({ personalInfo }) => {
  return (
    <>
      <div className="preview flex-col bg-white my-2.5 shadow-2xl">
        <PersonalInfoPreview personalInfo={personalInfo} />
      </div>
    </>
  );
};

export default Preview;
