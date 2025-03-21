const mongoose = require('mongoose')

const symptomSchema = new mongoose.Schema({
    symptoms: [String],
    additionalNotes: {
        type:String,
        required: false
    },
    reportedBy: {
        type:String
    },
    contacts: {
        type:String
    }
})