import {GET_TABLE} from '../actions/getTable';

export default function getTables(state = {}, action) {
  switch (action.type) {
    case GET_TABLE:
      return state = action.payload;
    default:
      return state;
  }
}

