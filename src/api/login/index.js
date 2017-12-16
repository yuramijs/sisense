const login = require('express').Router();
import passport from './../../passport';

login.use(passport.initialize());
login.use(passport.session());

/*log in*/
let status = false;
login.post('/login',
  passport.authenticate('local', {failureRedirect: '/login'}),
  (req, res) => {
    status = true;
    res.redirect('/');
  },
);
/*log in*/
login.get('/auth', checkAuthentication, () => {
});

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(200, {result: status});
  }
}

export default login;