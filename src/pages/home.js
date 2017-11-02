import React from "react";
import { Link } from "react-router-dom";
import { map, toLower } from "ramda";
import { connect } from "react-redux";
import AddColor from "../components/add-color";
import RemoveColor from "../components/remove-color";

const li = color => (
  <li className="ph3 pv3 ba bw1 b--light-silver hover-bg-light-silver hover-">
    <Link className={`link ${toLower(color)}`} to={`/${color}`}>
      {color}
    </Link>
  </li>
);

const Home = props => (
  <div>
    <AddColor
      value={props.newColor}
      onChange={props.setNewColor}
      onSubmit={props.addColor}
    />
    <RemoveColor
      value={props.selectedColor}
      onChange={props.setRemoveColor}
      onSubmit={props.removeColor}
    />
    <ul className="list f4 pl0 ml0 ba b--light-silver br2 ">
      {map(li, props.colors)}
    </ul>
  </div>
);
const mapStateToProps = state => {
  return {
    colors: state.colors,
    newColor: state.newColor,
    selectedColor: state.selectedColor
  };
};
const mapActionToProps = (dispatch, getState) => {
  return {
    setNewColor: event => {
      console.log("event.target.value", event.target.value);
      dispatch({ type: "SET_NEW_COLOR", payload: event.target.value });
    },
    addColor: color => {
      console.log("color", color);
      dispatch({ type: "ADD_COLOR", payload: color });
    },
    setRemoveColor: event => {
      console.log("SET_REMOVE_COLOR", event.target.value);
      dispatch({ type: "SET_REMOVE_COLOR", payload: event.target.value });
    },
    removeColor: color => {
      console.log("color", color);
      dispatch({ type: "REMOVE_COLOR", payload: color });
    }
  };
};

const connector = connect(mapStateToProps, mapActionToProps);

export default connector(Home);
