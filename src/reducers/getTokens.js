import {GET_TOKEN} from '../actions/getToken';

const INITIAL_STATE = {};

export default function getTokens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
}

