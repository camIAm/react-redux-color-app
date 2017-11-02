import { createStore } from "redux";
import { remove, merge, append, uniq } from "ramda";

const initialState = {
  newColor: "",
  selectedColor: "",
  title: "Colors",
  colors: ["Red", "Green", "Blue"]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_COLOR") {
    console.log("state.colors", state.colors);
    return merge(state, {
      newColor: "",
      colors: uniq(append(action.payload, state.colors))
    });
  }
  if (action.type === "SET_NEW_COLOR") {
    console.log("action.payload", action.payload);
    return merge(state, { newColor: action.payload });
  }
  if (action.type === "SET_REMOVE_COLOR") {
    console.log("SET_REMOVE_COLOR store", action.payload);
    return merge(state, { selectedColor: action.payload });
  }
  if (action.type === "REMOVE_COLOR") {
    console.log("REMOVE_COLOR store", action.payload);
    return merge(state, { colors: remove(action.payload, state.colors) });
  }

  return state;
};

export default createStore(rootReducer);
