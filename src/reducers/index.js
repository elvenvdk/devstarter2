import { combineReducers } from 'redux';

const initReducer = (state = {}, actions) => {
  return state;
};

const rootReducer = combineReducers({
  init: initReducer
});

export default rootReducer;
