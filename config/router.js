const router = require('express').Router();
const paintings = require('../controllers/paintings');
const auth = require('../controllers/auth');
const user = require('../controllers/user');

router.route('/paintings')
  .get(paintings.index)
  .post(paintings.create);

router.route('/paintings/:id')
  .get(paintings.show)
  .put(paintings.update)
  .delete(paintings.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users/:userId')
  .get(user.profile)
  .put(user.edit);


module.exports = router;
