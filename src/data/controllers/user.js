import {User as user} from '../models';
import jwt from 'jsonwebtoken';

const secret = 'secret';


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
    const {name, password} = req.body;

    const users = new user({ name, password });

    users.save(err => {
      if (err) throw err;

      res.json({
        success: true,
        message: 'User saved successfully'
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
    for( var i = 0; i < 100000; i++ ) {
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
      if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' })
      if (user.password !== password) return res.json({ success: false, message: 'Authentication failed. Wrong password.' })

      const payload = {
        admin: user.admin
      };

      const token = jwt.sign(payload, secret, {
        expiresIn: 86400
      });

      res.json({
        success: true,
        token: token
      });

      // user.findOneAndUpdate({password: password}, {$set:{name: token}}, (err, doc) => {
      //   if(err) return console.log("Something wrong when updating data!");
    
      //   console.log('Token save');
      // });


    });


  }

}