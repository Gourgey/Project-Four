const router = require('express').Router();
const paintings = require('../controllers/paintings');

router.route('/paintings')
  .get(paintings.index)
  .post(paintings.create);

router.route('/paintings/:id')
  .get(paintings.show)
  .put(paintings.update);
  
module.exports = router;
