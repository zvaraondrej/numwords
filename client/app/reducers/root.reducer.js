import { combineReducers } from 'redux';
import words from './words.reducer';

const rootReducer = combineReducers({
  words,
});

export default rootReducer;
