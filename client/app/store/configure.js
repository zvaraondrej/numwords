import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/root.reducer';

export default function configure() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
