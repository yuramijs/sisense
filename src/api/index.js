const routes = require('express').Router();
import jwt from 'jsonwebtoken';
import config from './../config.js';

import {User} from './../data/controllers';


routes.post('/register', (req, res) => User.register(req, res));
routes.post('/authenticate', (req, res) => User.authenticate(req, res));
routes.get('/setup', (req, res) => User.dummyDB(req, res));

routes.post('/chunk', (req, res) => {
  const chunk = req.body.chunk;
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, config.auth.jwt.secret, (err, decoded) => {
      if (err) return res.json({ success: false, message: 'Failed to authenticate token.' })
      req.decoded = decoded;
      User.findByChunk(res, chunk)
    });
  } else {
    return res
      .status(403)
      .send({
        success: false,
        message: 'No token provided.'
      });
  }
});

routes.get('/users', (req, res) => User.findAll(res));
routes.get('/users/:params', (req, res) => User.findBy(req, res));


export default routes;