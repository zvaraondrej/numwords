import * as types from './types';
import WordsResource from './../api/words.resource';

export function fetchWordsSuccess(words) {
  return { type: types.FETCH_WORDS_SUCCESS, data: words, err: [] };
}

export function fetchWordsError(error) {
  return { type: types.FETCH_WORDS_ERROR, data: [], err: [error] };
}

export function clearWords() {
  return { type: types.CLEAR_WORDS, data: [], err: [] };
}

export function fetchWords(param) {
  return function (dispatch) {
    return WordsResource.getWords(param)
      .then((words) => {
        dispatch(fetchWordsSuccess(words));
      })
      .catch((error) => {
        dispatch(fetchWordsError(error));
      });
  };
}
