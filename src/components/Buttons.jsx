import React from "react";

const Buttons = ({ remove, cancel, save, id, arrayName }) => {
  return (
    <div
      className="flex justify-between items-center my-2 mx-1.5"
      id={id}
      data-array-name={arrayName}
    >
      <button
        className="flex items-center p-2 bg-red-500 text-white rounded-lg gap-1.5 h-11"
        onClick={remove}
      >
        Delete<i className="fa-regular fa-trash-can"></i>
      </button>
      <div className="flex gap-2">
        <button className="p-2 rounded-lg border-2 w-24 h-11" onClick={cancel}>
          Cancel
        </button>
        <button
          className="p-2 rounded-lg bg-green-600 text-white w-24 h-11"
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Buttons;
