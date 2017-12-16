const routes = require('express').Router();
import {customDefinitions, Macros} from './../../data/controllers/';

const macro = (() => {
//macro-create-tag
  routes.post('/macro-create-tag', (req, res) => {
    const data = req.body;
    Macros.create(data, res);
  });
  routes.get('/get-macro-tag', (req, res) => {
    const data = req.body;
    Macros.get(res);
  });
  routes.get('/get-macro-tags', (req, res) => {
    Macros.getAll(res);
  });
  routes.post('/macro-tag', (req, res) => {
    const publisherId = req.body.publisherId;
    Macros.get(publisherId, res);
  });
//macro-create-tag

//macro-create-definition
  routes.post('/macro-create-definition', (req, res) => {
    const data = req.body;
    customDefinitions.create(data, res)
  });
  routes.get('/get-definition', (req, res) => {
    customDefinitions.get(res);
  });
  routes.post('/attach-definition', (req, res) => {
    const {id, name} = req.body;
    customDefinitions.attach(id, name, res);
  });
//macro-create-definition

})();

export default macro;