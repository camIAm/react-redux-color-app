import React from "react";
import { dispatch } from "redux";
const AddColor = ({ value, onSubmit, onChange }) => {
  return (
    <form
      className="flex"
      onSubmit={e => {
        console.log("value", value);
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input value={value} onChange={onChange} />
      <button>Add Color</button>
    </form>
  );
};

export default AddColor;
