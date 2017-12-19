import {combineReducers} from 'redux';

import getTables from './getTables';
import sorts from './sorts';
import runtime from './runtime';

export default combineReducers({
  runtime,
  getTables,
  sorts,
});
