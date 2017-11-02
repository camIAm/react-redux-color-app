import React from "react";
import { toLower } from "ramda";
const pageColor = color => ({
  height: "900px",
  color: "white",
  backgroundColor: toLower(color)
});
const Show = props => (
  <div
    className={`avenir vh-100 tc ttc pv4 f2 bg-${toLower(
      props.match.params.color
    )}`}
  >
    {props.match.params.color}
  </div>
);

export default Show;
