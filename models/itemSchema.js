const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  imageUrl: {type: String, required: true},
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  brand: {type: String, required: false},
  gender: {type: String, required: false},
}, {
  timestamps: true
});

module.exports = itemSchema;
