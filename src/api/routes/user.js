const routes = require('express').Router();
import {Users} from './../../data/controllers/';

const user = (() => {
  routes.post('/create-user', (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    Users.create(firstName, lastName, email, password, res);
  });
  routes.get('/get-users', (req, res) => {
    Users.get(res);
  });
  routes.post('/attach-user', (req, res) => {
    const {id, name} = req.body;
    //TODO refactor
    Users.attach(id, name, res);
  });
})();

export default user;