import axios from 'axios';
export const GET_TABLE = 'GET_TABLE';

const getTable = async (params) => {

  const token = await axios.get(`http://localhost:3000/users/`); //${params}
  const data = token.data;


  return {
    type: GET_TABLE,
    payload: data,
  };
};

export default getTable;
