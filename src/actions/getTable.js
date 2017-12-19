import axios from 'axios';
export const GET_TABLE = 'GET_TABLE';
import {reverse} from 'lodash';

const getTable = async (chunk, params, name) => {

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Authorization': token,
    }
  };
  let chunks = null;
  let data = null;

  if(params) {
    chunks = await axios.get(`http://localhost:3000/tables/${params} `);
    data = chunks.data;
  }
  else if (name) {
    chunks = await axios.post('http://localhost:3000/chunk', {chunk: 10, token}, config);
    data = chunks.data;
    reverse(data);
  }
  else {
    chunks = await axios.post('http://localhost:3000/chunk', {chunk, token}, config);
    data = chunks.data;
  }


  return {
    type: GET_TABLE,
    payload: data,
  };


};

export default getTable;
