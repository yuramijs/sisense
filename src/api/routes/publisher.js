const routes = require('express').Router();
import {Publishers} from './../../data/controllers/';

const publisher = (() => {
  routes.post('/create-publisher', (req, res) => {
    const {publisherName} = req.body;
    Publishers.create(publisherName, res);
  });
  routes.get('/get-publishers', (req, res) => {
    Publishers.get(res)
  });
  routes.post('/attach-publisher', (req, res) => {
    const {id, name} = req.body;
    Publishers.attach(id, name, res);
  });
  routes.get('/get-current-publisher', (req, res) => {
    Publishers.getFirst(res);
  });
})();

export default publisher;