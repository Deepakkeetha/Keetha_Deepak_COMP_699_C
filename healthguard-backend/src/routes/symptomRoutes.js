const express = require('express');
const symptomController = require('../controllers/symptomController');

const router = express.Router();

router.get('/', symptomController.getAllSymptoms);
router.get('/:id', symptomController.getSymptomById);
router.post('/', symptomController.createSymptom);
router.put('/:id', symptomController.updateSymptom);
router.delete('/:id', symptomController.deleteSymptom);

module.exports = router;