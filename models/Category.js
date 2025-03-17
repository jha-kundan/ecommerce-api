const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category Schema
const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: String,
    isActive: { type: Boolean, default: true }
  });

module.exports = mongoose.model('Category', CategorySchema);