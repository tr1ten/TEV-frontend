import { combineReducers } from 'redux';
import userReducer from './userReducer';
import teamReducer from './teamReducer';

const rootReducer = combineReducers({
  users: userReducer,
  team: teamReducer,
});

export default rootReducer;
