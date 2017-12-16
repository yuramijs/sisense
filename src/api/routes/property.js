const routes = require('express').Router();
import {Properties} from './../../data/controllers/';

const property = (() => {
  routes.post('/create-property', (req, res) => {
    const {propertyURL, propertyPlatform} = req.body;
    if (req.body) {
      Properties.create(propertyURL, propertyPlatform, res);
    }
  });
  routes.get('/get-property', (req, res) => {
    Properties.get(res);
  });
  routes.post('/attach-property', (req, res) => {
    const {id, name} = req.body;
    Properties.attach(id, name, res);
  });
})();

export default property;