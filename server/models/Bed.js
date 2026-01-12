const mongoose = require('mongoose');

const BedSchema = new mongoose.Schema({
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bedNumber: { type: String, required: true },
  isOccupied: { type: Boolean, default: false }
});

module.exports = mongoose.model('Bed', BedSchema);