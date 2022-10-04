import {createStore, combineReducers} from 'redux';

import authReducer from './reducers/authReducer';
import scoreReducer from './reducers/scoreReducer';

export default createStore(
  combineReducers({
    authReducer,
    scoreReducer,
  }),
);
