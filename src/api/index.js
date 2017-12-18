const routes = require('express').Router();
import {User} from './../data/controllers';


routes.post('/register', (req, res) => User.register(req, res));
routes.post('/authenticate', (req, res) => User.authenticate(req, res));
routes.get('/setup', (req, res) => User.dummyDB(req, res));

routes.post('/chunk', (req, res) => {
  const chunk = req.body.chunk;
  User.findByChunk(res, chunk)
});

routes.get('/users', (req, res) => User.findAll(res));
routes.get('/users/:params', (req, res) => User.findBy(req, res));

//TODO enable secure
//save token to db with crypto
// app.use(function(req, res, next) {
//
//   // check header or url parameters or post parameters for token
//   const token = req.body.token || req.param('token') || req.headers['x-access-token'];
//
//   // decode token
//   if (token) {
//
//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         next();
//       }
//     });
//
//   } else {
//
//     // if there is no token
//     // return an error
//     return res.status(403).send({
//       success: false,
//       message: 'No token provided.'
//     });
//
//   }
//
// });


export default routes;