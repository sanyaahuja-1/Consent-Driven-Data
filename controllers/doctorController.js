const Consent = require('../models/Consent');
const Record = require('../models/Record');

exports.requestConsent = async (req, res) => {
  try {
    const { patientId, recordType, expiresAt } = req.body;
    const consent = await Consent.create({
      patient: patientId,
      doctor: req.user.id,
      recordType,
      expiresAt,
      approved: false
    });
    res.status(201).json(consent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.viewRecords = async (req, res) => {
  try {
    const { patientId } = req.params;
    const now = new Date();

    const consents = await Consent.find({
      doctor: req.user.id,
      patient: patientId,
      approved: true,
      expiresAt: { $gt: now }
    });

    const recordTypes = consents.map(c => c.recordType);
    const records = await Record.find({ patient: patientId, type: { $in: recordTypes } });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};