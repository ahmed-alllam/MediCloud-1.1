const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  patientPhone: {
    type: Number,
  },
  patientFirstName: {
    type: String,
    required: true
  },
  patientLastName: {
    type: String,
    required: true
  },
  patientPhoto: {
    type: String,
  },
  patientEmail: {
    type: String
  },
  patientMediCardID: {
    type: String,
  },
  patientBirthDate: {
    type: Date
  }, 
  patientCity: {
    type: String
  },
  patientBloodType: {
    type: String
  },
  patientEmergencyContacts: {
    type: String
  },
  patientGender: {
    type: String
  },
  patientStatus: {
    type: String
  },
  patientHeight: {
    type: Number,
  },
  patientWeight: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now
  },

  patientMedications: {
    type: Array,
    default: []
  },
  patientDiseases: {
    type: Array,
    default: []
  },
  patientFamilyHistory: {
    type: Array,
    default: []
  },
  patientImmunizations: {
    type: Array,
    default: []
  },
  patientAllergies: {
    type: Array,
    default: []
  },
  patientPrescriptions: {
    type: Array,
    default: []
  },
  patientScans: {
    type: Array,
    default: []
  },
  patientLabTests: {
    type: Array,
    default: []
  },
});

module.exports = mongoose.model("Patients", PatientSchema);
