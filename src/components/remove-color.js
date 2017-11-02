import React from "react";
import { dispatch } from "redux";
const RemoveColor = ({ value, onSubmit, onChange }) => {
  return (
    <form
      className="flex"
      onSubmit={e => {
        console.log("remove-color", value);
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input value={value} onChange={onChange} />
      <button>Remove Color</button>
    </form>
  );
};

export default RemoveColor;
