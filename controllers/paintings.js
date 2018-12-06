const Painting = require('../models/painting');

function indexRoute(req, res, next) {
  Painting
    .find()
    .exec()
    .then(paintings => res.json(paintings))
    .catch(next);
}

function createRoute(req, res, next) {
  Painting
    .create(req.body)
    .then(painting => res.status(201).json(painting))
    .catch(next);
}

function showRoute(req, res, next) {
  Painting
    .findById(req.params.id)
    .exec()
    .then(painting => res.json(painting))
    .catch(next);
}




module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
