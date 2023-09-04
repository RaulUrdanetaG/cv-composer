import React from 'react'

const ExperiencePreview = ({experience}) => {
  return (
    <>
      <h4 className="experience-title text-center p-2 mt-4 mx-6 font-bold">
        Experience
      </h4>
      {experience.map((exp) => {
        return !exp.isHidden ? (
          <div key={exp.id} className="flex gap-6 mx-6 my-2.5">
            <div className='w-36'>
              <h4 className="font-semibold">
                {exp.startDate} - {exp.endDate}
              </h4>
              <h4>{exp.location}</h4>
            </div>
            <div>
              <h4 className="font-bold">{exp.companyName}</h4>
              <h4 className='font-semibold'>{exp.positionTitle}</h4>
              <h4 className='max-w-md'>{exp.description}</h4>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
}

export default ExperiencePreview