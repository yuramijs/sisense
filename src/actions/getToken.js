import axios from 'axios';
export const GET_TOKEN = 'GET_TOKEN';

const getToken = async (name, password) => {
  console.log('getToken', name)
  const token = await axios.post('http://localhost:3000/authenticate', {
    name,
    password
  });

  const data = token.data.token;

  return {
    type: GET_TOKEN,
    payload: data,
  };
};

export default getToken;
