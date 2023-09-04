import React from "react";

const EducationPreview = ({ education }) => {
  return (
    <>
      <h4 className="education-title text-center p-2 mt-4 mx-6 font-bold">
        Education
      </h4>
      {education.map((edu) => {
        return !edu.isHidden ? (
          <div key={edu.id} className="flex gap-6 mx-6 my-2.5">
            <div className="w-36">
              <h4 className="font-semibold">
                {edu.startDate} - {edu.endDate}
              </h4>
              <h4>{edu.location}</h4>
            </div>
            <div>
              <h4 className="font-bold">{edu.schoolName}</h4>
              <h4>{edu.degree}</h4>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};

export default EducationPreview;
