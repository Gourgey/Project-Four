const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  price: Number
  // contemporary: Boolean
});


module.exports = mongoose.model('Painting', paintingSchema);
