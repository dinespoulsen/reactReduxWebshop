import {Map} from 'immutable';
export const setState = (state, entries) => {
  return state.set("entries", entries);
};

export const INITIAL_STATE = Map();
