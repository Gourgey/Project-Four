const Purchase = require('../models/purchases');


function completeIndexRoute(req, res, next) {
  Purchase.find()
    .populate('painting')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function userIndexRoute(req, res, next) {
  Purchase.find({ user: req.tokenUserId })
    .populate('painting')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function createRoute(req, res, next) {
  if (Array.isArray(req.body)) {
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = null;
    });
  } else {
    req.body.user = req.tokenUserId;
    req.body._id = null;
  }
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}


module.exports = {
  completeIndex: completeIndexRoute,
  userIndex: userIndexRoute,
  create: createRoute
};
