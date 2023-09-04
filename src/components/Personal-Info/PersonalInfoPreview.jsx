import React from "react";

const PersonalInfoPreview = ({ personalInfo }) => {
  return (
    <div className="preview-presonal p-5 text-center text-white">
      <h3 className="text-4xl">{personalInfo.fullName}</h3>
      <h4 className="title text-2xl">{personalInfo.title}</h4>
      <div className="flex justify-center gap-2.5 mt-3">
        {personalInfo.email && (
          <div className="flex gap-1.5 items-center">
            <i className="fa-solid fa-envelope"></i>
            <span>{personalInfo.email}</span>
          </div>
        )}
        {personalInfo.phoneNumber && (
          <div className="flex gap-1.5 items-center">
            <i className="fa-solid fa-phone"></i>
            <span>{personalInfo.phoneNumber}</span>
          </div>
        )}
        {personalInfo.address && (
          <div className="flex gap-1.5 items-center">
            <i className="fa-solid fa-location-dot"></i>
            <span>{personalInfo.address}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
