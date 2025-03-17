const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 // Cart Schema
 const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      variantSku: { type: String, required: true },
      quantity: { type: Number, default: 1 }
    }],
    updatedAt: { type: Date, default: Date.now }
  });
   module.exports = mongoose.model('Cart', CartSchema);