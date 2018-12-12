const mongoose = require('mongoose');


const purchaseSchema = mongoose.Schema({
  price: Number,
  quantity: Number,
  painting: { type: mongoose.Schema.ObjectId, ref: 'Painting', required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


purchaseSchema.virtual('totalPrice')
  .get(function() {
    return this.price * this.quantity;
  });

purchaseSchema.set('toJSON', { virtuals: true });


module.exports = mongoose.model('Purchase', purchaseSchema);
