const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  // Order Schema
  const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      variantSku: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: Object, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    orderStatus: { type: String, enum: ['processing', 'shipped', 'delivered', 'cancelled'], default: 'processing' },
    createdAt: { type: Date, default: Date.now }
  });
  module.exports = mongoose.model('Order', OrderSchema);
