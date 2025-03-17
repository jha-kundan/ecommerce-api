const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, index: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  attributes: {
      brand: { type: String },
      color: [String],
      size: [String]
  },
  variants: [{
      sku: { type: String, sparse: true, required: false  }, 
      color: String,
      size: String,
      price: Number
  }],
  images: [String],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

 
  
module.exports = mongoose.model('Product', ProductSchema);


