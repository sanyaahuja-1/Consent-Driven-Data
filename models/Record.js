const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['Lab Report', 'Prescription', 'Diagnosis'], required: true },
  content: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Record', RecordSchema);