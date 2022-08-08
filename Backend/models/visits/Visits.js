const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  isReturnVisit: {
    type: Boolean,
    default: false
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
  patientComplaint: {
    type: String,
    required: true
  },
  patientDiagnosis: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  followUpDate: {
    type: Date,
  },
  visitCost: {
    type: Number
  }
});

module.exports = mongoose.model("Visits", VisitSchema);
