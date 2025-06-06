const express = require('express');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const { requestConsent, viewRecords } = require('../controllers/doctorController');

const router = express.Router();

router.use(auth, role(['doctor']));
router.post('/consent/request', requestConsent);
router.get('/records/:patientId', viewRecords);

module.exports = router;