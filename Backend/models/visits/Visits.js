const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  patientSymptoms: {
    type: Array(String),
    required: true
  },
  patientDiagnosis: {
    type: String,
    required: true
  },
  patientMedications:
  [{
      name: String,
      dose: String,
      image: String,
    }
  ],
  visitCost: {
    type: Number
  }
});

module.exports = mongoose.model("Visits", VisitSchema);
