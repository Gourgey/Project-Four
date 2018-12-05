const Painting = require('../models/painting');

function indexRoute(req, res, next) {
  Painting
    .find()
    .exec()
    .then(paintings => res.json(paintings))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
