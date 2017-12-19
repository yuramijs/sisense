import axios from 'axios';
export const GET_TABLE = 'GET_TABLE';

const getTable = async (chunk) => {

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Authorization': token,
    }
  };

  //const token = await axios.get(`http://localhost:3000/users/`); //${params}
  if(chunk === null) {
    const chunk = await axios.post('http://localhost:3000/chunk', {chunk:0, token}, config);
    const data = chunk.data.reverse();
    return {
      type: GET_TABLE,
      payload: data,
    };
  }
  else {
    const chunks = await axios.post('http://localhost:3000/chunk', {chunk, token}, config);
    const data = chunks.data;

    return {
      type: GET_TABLE,
      payload: data,
    };
  }

};

export default getTable;
