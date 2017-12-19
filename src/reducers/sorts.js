import {SORT_COLLECTION} from '../actions/sort';

export default function sorts(state = {}, action) {
  switch (action.type) {
    case SORT_COLLECTION:
      return [...state, [1,2,3]];
    default:
      return state;
  }
}

