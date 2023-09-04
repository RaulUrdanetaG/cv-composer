import React from "react";
import InputGroup from "../InputGroups";
import CollapsedForm from "../CollapsedForm";
import Buttons from "../Buttons";
import AddButton from "../AddButton";

const ExperienceForm = ({
  experience,
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
      id={experience.id}
      data-array-name="experiences"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter company name"
        value={experience.companyName}
        onChange={onChange}
        data-key="companyName"
      />
      <InputGroup
        type="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter position title"
        value={experience.positionTitle}
        onChange={onChange}
        data-key="positon"
      />
      <div className="dates-group flex">
        <InputGroup
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={experience.startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputGroup
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={experience.endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
      <InputGroup
        type="textarea"
        id="description"
        labelText="description"
        placeholder="Enter description"
        value={experience.description}
        onChange={onChange}
        data-key="description"
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

const ExperienceSection = ({
  experiences,
  onChange,
  onHide,
  onOpen,
  onAdd,
  onCancel,
  onDelete,
}) => {
  return (
    <div className="experience-section flex flex-col mx-0 rounded-xl bg-white px-5 py-4 shadow-xl">
      <h5 className="section-title text-2xl mb-1.5 font-semibold flex justify-between">
        Experience
      </h5>
      {experiences.map((experience) => {
        return experience.isCollapsed ? (
          <CollapsedForm
            name={experience.companyName}
            isHidden={experience.isHidden}
            hideForm={onHide}
            key={experience.id}
            id={experience.id}
            onClick={onOpen}
            arrayName="experiences"
          />
        ) : (
          <ExperienceForm
            experience={experience}
            onChange={onChange}
            onClick={onOpen}
            onCancel={onCancel}
            onDelete={onDelete}
            id={experience.id}
            key={experience.id}
            arrayName="experiences"
          />
        );
      })}
      <AddButton name="Experience" addFcn={onAdd} id="experiences" />
    </div>
  );
};

export default ExperienceSection;
