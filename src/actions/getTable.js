import axios from 'axios';
export const GET_TABLE = 'GET_TABLE';
import {sortBy} from 'lodash';

const getTable = async (chunk) => {

  //const token = await axios.get(`http://localhost:3000/users/`); //${params}
  if(chunk === null) {
    const token = await axios.post('http://localhost:3000/chunk', 0)
    const data = token.data.reverse();
    return {
      type: GET_TABLE,
      payload: data,
    };
  }
  else {
    const token = await axios.post('http://localhost:3000/chunk', {chunk})
    const data = token.data;
    return {
      type: GET_TABLE,
      payload: data,
    };
  }

};

export default getTable;
