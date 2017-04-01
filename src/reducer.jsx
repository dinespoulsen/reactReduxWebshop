import {setState, INITIAL_STATE} from "../src/coreActions.jsx";

export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "SET_STATE":
      return setState(state, action.entries);
  }
  return state;
};
