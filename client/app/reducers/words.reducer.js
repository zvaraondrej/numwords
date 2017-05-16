import * as types from './../actions/types';
import initialState from './initialState';

export default function wordsReducer(state, action) {
  switch (action.type) {
    case types.FETCH_WORDS_SUCCESS:
      return {
        data: action.data,
        err: action.err,
      };
    case types.FETCH_WORDS_ERROR:
      return {
        data: action.data,
        err: action.err,
      };
    case types.CLEAR_WORDS:
      return {
        data: action.data,
        err: action.err,
      };
    default:
      return initialState;
  }
}
