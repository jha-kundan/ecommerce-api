const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Discount/Promotion Schema
 const DiscountSchema = new Schema({
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ['percentage', 'fixed'], required: true },
    value: { type: Number, required: true },
    applicableCategories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    applicableProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    validFrom: Date,
    validTo: Date,
    maxUses: Number,
    usedCount: { type: Number, default: 0 }
  });
    module.exports = mongoose.model('Discount', DiscountSchema);