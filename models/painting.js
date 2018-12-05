const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  description: String,
  contemporary: Boolean
});


module.exports = mongoose.model('Painting', paintingSchema);
