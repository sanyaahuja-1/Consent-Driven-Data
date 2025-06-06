const express = require('express');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const { uploadRecord, getRecords, respondToConsent } = require('../controllers/patientController');

const router = express.Router();

router.use(auth, role(['patient']));
router.post('/record', uploadRecord);
router.get('/record', getRecords);
router.post('/consent/respond', respondToConsent);

module.exports = router;