const User = require('../models/user');

function show(req, res, next){
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
}

function update(req, res, next){
  User.findById(req.params.userId)
    .exec()
    .then(user => {
      Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}



module.exports = {
  profile: show,
  edit: update
};
