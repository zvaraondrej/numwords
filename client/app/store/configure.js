import {createStore, applyMiddleware} from 'redux';  
import rootReducer from './../reducers/root.reducer';  
import thunk from 'redux-thunk';

export default function configure() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}