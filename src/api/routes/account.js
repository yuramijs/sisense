const routes = require('express').Router();
import {Accounts} from './../../data/controllers/';

const accounts = (() => {
  routes.get('/get-account', (req, res) => {
    Accounts.get(res)
  });
  routes.post('/create-account', (req, res) => {
    const {accountName} = req.body;
    Accounts.create(accountName, res)
  });
})();

export default accounts;