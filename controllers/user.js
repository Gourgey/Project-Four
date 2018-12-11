const User = require('../models/user');

function profileRoute(req, res, next){
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  profile: profileRoute
};
