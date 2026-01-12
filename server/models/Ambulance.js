const mongoose = require('mongoose');

const AmbulanceSchema = new mongoose.Schema({
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ambulanceNumber: { type: String, required: true },
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Ambulance', AmbulanceSchema);