const User = require('../models/user');

function profileRoute(req, res, next){
  User.findById(req.params.id)
    .then(user => {
      console.log('this is the user ', user);
      res.json(user.username);
    })
    .catch(next);
}

module.exports = {
  profile: profileRoute
};
