import React from "react";

const AddButton = ({ addFcn, name, id }) => {
  return (
    <div className="flex justify-center">
      <button
        className="collapsed-form section-form flex items-center my-2 px-3 py-1.5 rounded-full border-2"
        id={id}
        onClick={addFcn}
        // data-array-name={arrayName}
      >
        <p className="collapsed-form-title flex items-center gap-2">
          <i className="fa-regular fa-plus"></i> {name}
        </p>
      </button>
    </div>
  );
};

export default AddButton;
