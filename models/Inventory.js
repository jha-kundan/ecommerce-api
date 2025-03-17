const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Inventory Schema
const InventorySchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    variantSku: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    location: { type: String, required: true }, // Warehouse location
    lowStockThreshold: { type: Number, default: 10 },
    status: { type: String, enum: ['in_stock', 'low_stock', 'out_of_stock'], default: 'in_stock' }
  });

module.exports = mongoose.model('Inventory', InventorySchema);
