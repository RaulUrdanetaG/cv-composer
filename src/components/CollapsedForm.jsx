import React from "react";

const CollapsedForm = ({
  name,
  isHidden,
  hideForm,
  arrayName,
  id,
  onClick,
}) => {
  return (
    <button
      className="collapsed-form section-form flex items-center justify-between my-2"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{name}</p>
      <i
        className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"} eye`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      ></i>
    </button>
  );
};

export default CollapsedForm;
