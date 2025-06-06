const mongoose = require('mongoose');

const ConsentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recordType: { type: String, enum: ['Lab Report', 'Prescription', 'Diagnosis'], required: true },
  expiresAt: { type: Date, required: true },
  approved: { type: Boolean, default: false },
  requestedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Consent', ConsentSchema);