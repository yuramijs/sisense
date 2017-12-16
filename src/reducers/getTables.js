import {GET_TABLE} from '../actions/getTable';

const INITIAL_STATE = {};

export default function getTables(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TABLE:
      return {...state, table: action.payload};
    default:
      return state;
  }
}

