const Record = require('../models/Record');
const Consent = require('../models/Consent');

exports.uploadRecord = async (req, res) => {
  try {
    const { type, content } = req.body;
    const record = await Record.create({ patient: req.user.id, type, content });
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ patient: req.user.id });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.respondToConsent = async (req, res) => {
  try {
    const { consentId, approved } = req.body;
    const consent = await Consent.findOne({ _id: consentId, patient: req.user.id });
    if (!consent) return res.status(404).json({ error: 'Consent request not found' });

    consent.approved = approved;
    await consent.save();

    res.json({ message: `Consent ${approved ? 'approved' : 'rejected'}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};