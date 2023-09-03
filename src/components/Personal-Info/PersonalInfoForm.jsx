import React from "react";
import InputGroup from "../InputGroups";

export const PersonalInfoForm = ({ personalInfo, onChange }) => {
  console.log(personalInfo);
  return (
    <div className="info-section flex flex-col my-2.5 mx-0 rounded-xl bg-white px-5 py-4 shadow-xl">
      <h5 className="section-title text-2xl mb-1.5 font-semibold">Personal Information</h5>
      <InputGroup
        id="full-name"
        placeholder="First and last name"
        type="text"
        labelText="Full name"
        onChange={onChange}
        value={personalInfo.fullName}
        data-key="fullName"
      />
      <InputGroup
        id="title"
        placeholder="Your title"
        type="text"
        labelText="Title"
        onChange={onChange}
        value={personalInfo.title}
        data-key="title"
        recommended
      />
      <InputGroup
        id="email"
        placeholder="Your email"
        type="email"
        labelText="E-mail"
        onChange={onChange}
        value={personalInfo.email}
        data-key="email"
        recommended
      />
      <InputGroup
        id="number"
        placeholder="Your telephone number"
        type="tel"
        labelText="Phone Number"
        onChange={onChange}
        value={personalInfo.phoneNumber}
        data-key="number"
        recommended
      />
      <InputGroup
        id="address"
        placeholder="Your telephone numbre"
        type="Address"
        labelText="Address"
        onChange={onChange}
        value={personalInfo.address}
        data-key="address"
        recommended
      />
    </div>
  );
};
