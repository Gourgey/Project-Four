const Message = require('../models/messages');

function indexRoute(req, res, next) {
  Message.find({ $or: [{ from: req.tokenUserId }, { to: req.tokenUserId }] })
    .populate('from to', 'username image')
    .sort('createdAt')
    .then(messages => res.json(messages))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.from = req.tokenUserId;
  Message.create(req.body)
    .then(message => Message.populate(message, 'from to'))
    .then(message => res.json(message))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Message.findOneAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  delete: deleteRoute
};
