import {combineReducers} from 'redux';

import getTokens from './getTokens';
import getTables from './getTables';
import runtime from './runtime';

export default combineReducers({
  runtime,
  getTokens,
  getTables,
});
