import axios from 'axios';

const sendData = (link, data, definition) => {
  axios.post(link, data, definition)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
const getData = (link, data) => {
  return axios.post(link, data)
};




export {sendData, getData};