import jwt from 'jsonwebtoken';

import {User as user} from '../models';
import config from './../../config.js';

const secret = config.auth.jwt.secret;


export default class User {

  static findAll(res) {
    user.find({}, (err, users) => {
      if (err) throw err;
      res.json(users)
    })
  }

  static findByChunk(res, chunk) {
    user
      .find({})
      .skip(chunk)
      .limit(40)
      .exec((err, users) => {
        if (err) return console.log(err);
        res.json(users)
      });

  }

  static register(req, res) {
    const data = req.body;

    const users = new user(data);

    users.save(err => {
      if (err) throw err;

      res.json({
        success: true,
        message: 'User saved successfully',
      });
    });
  }

  static findBy(req, res) {
    user.find({name: req.params.params}, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  }

  static dummyDB(req, res) {
    for( let i = 0; i < 100000; i++ ) {
      new user( {name:  i, password: 'pass'} ).save();
    }
    res.json({
      success: true,
      message: 'dummyDB successfully',
    });
  }

  static authenticate(req, res) {

    const {name, password} = req.body;

    //TODO change to findAll
    user.findOne({name}, (err, user) => {
      if (err) throw err;
      if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });
      if (user.password !== password) return res.json({ success: false, message: 'Authentication failed. Wrong password.' });

      const token = jwt.sign(null, secret, {
        expiresInMinutes: 1440,
      });

      res.json({
        success: true,
        token,
      });

    });


  }

}