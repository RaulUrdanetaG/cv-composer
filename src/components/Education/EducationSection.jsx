import React from "react";
import InputGroup from "../InputGroups";
import CollapsedForm from "../CollapsedForm";
import Buttons from "../Buttons";
import AddButton from "../AddButton";

const EducationForm = ({
  education,
  onChange,
  onClick,
  onCancel,
  onDelete,
  id,
  arrayName,
}) => {
  return (
    <form
      className="section-form flex flex-col"
      id={education.id}
      data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school / university"
        value={education.schoolName}
        onChange={onChange}
        data-key="schoolName"
      />
      <InputGroup
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree / Field Of Study"
        value={education.degree}
        onChange={onChange}
        data-key="degree"
      />
      <div className="dates-group flex justify-around">
        <InputGroup
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={education.startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputGroup
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={education.endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
      <InputGroup
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={education.location}
        onChange={onChange}
        data-key="location"
        optional
      />

      <Buttons
        remove={onDelete}
        cancel={onCancel}
        save={onClick}
        id={id}
        arrayName={arrayName}
      />
    </form>
  );
};

const EducationSection = ({
  educations,
  onChange,
  onHide,
  onOpen,
  onAdd,
  onCancel,
  onDelete,
}) => {
  return (
    <div className="education-section flex flex-col mx-0 rounded-xl bg-white px-5 py-4 shadow-xl">
      <h5 className="section-title text-2xl mb-1.5 font-semibold flex justify-between">
        Education
      </h5>
      {educations.map((education) => {
        return education.isCollapsed ? (
          <CollapsedForm
            name={education.degree}
            isHidden={education.isHidden}
            hideForm={onHide}
            key={education.id}
            id={education.id}
            onClick={onOpen}
            arrayName="educations"
          />
        ) : (
          <EducationForm
            education={education}
            onChange={onChange}
            onClick={onOpen}
            onCancel={onCancel}
            onDelete={onDelete}
            id={education.id}
            key={education.id}
            arrayName="educations"
          />
        );
      })}
      <AddButton name="Education" addFcn={onAdd} id="educations" />
    </div>
  );
};

export default EducationSection;
