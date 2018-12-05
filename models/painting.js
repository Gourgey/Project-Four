const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  description: String
});


module.exports = mongoose.model('Painting', paintingSchema);
