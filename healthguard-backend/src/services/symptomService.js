const Symptom = require('../models/Symptom');

exports.getAllSymptoms = async () => {
  return await Symptom.find();
};

exports.getSymptomById = async (id) => {
  return await Symptom.findById(id);
};

exports.createSymptom = async (symptomData) => {
  const newSymptom = new Symptom(houseData);
  return await newSymptom.save();
};

exports.updateSymptom = async (id, body) => {
    return await Symptom.findByIdAndUpdate(id, body);
}

exports.deleteSymptom = async (id) => {
    return await Symptom.findByIdAndDelete(id);
}