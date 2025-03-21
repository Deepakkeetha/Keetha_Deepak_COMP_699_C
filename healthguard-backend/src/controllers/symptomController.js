const symptomService = require('../services/symptomService');

exports.getAllSymptoms = async (req, res) => {
    try {
        const symptoms = await symptomService.getAllSymptoms()
        res.status(200).json(symptoms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSymptomById = async (req, res) => {
    try {
        const symptom = await symptomService.getSymptomById(req.params.id);
        if (!symptom) {
            return res.status(404).json({ error: 'Symptom not found' });
        }
        res.status(200).json(symptom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createSymptom = async (req, res) => {
    try {
        const newSymptom = await symptomService.createSymptom(req.body);
        res.status(201).json(newSymptom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateSymptom = async (req, res) => {
    try {
        const symptom = await symptomService.updateSymptom(req.params.id, req.body);
        if (!symptom) {
            return res.status(404).json({ error: 'Symptom not found' });
        }
        const updatedSymptom = await symptomService.getSymptomById(req.params.id);
        res.status(200).json(updatedSymptom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteSymptom = async (req, res) => {
    try {
        const symptom = await symptomService.deleteSymptom(req.params.id)
        if (!symptom) {
            return res.status(404).json({ error: 'Symptom not found' });
        }
        res.status(200).json(symptom)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}