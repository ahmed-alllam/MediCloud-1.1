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
  patientEmergencyContacts: [
    {
      name: String,
      phone: Number
    }
  ],
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

  patientMedications: [
    {
      name: String,
      dose: String,
      image: String,
      startDate: Date,
      endDate: Date
    }
  ],
  patientDiseases: [
    {
      name: String,
      details: String,
      image: String,
      startDate: Date,
      endDate: Date
    }
  ],
  patientFamilyHistory: [
    {
      name: String,
      member: String,
      image: String,
      startDate: Date,
      endDate: Date
    }
  ],
  patientImmunizations: [
    {
      name: String,
      details: String,
      image: String,
      date: Date,
    }
  ],
  patientAllergies: [
    {
      name: String,
      details: String,
      image: String,
      startDate: Date,
      endDate: Date
    }
  ],
  patientPrescriptions: [
    {
      details: String,
      image: String,
      date: Date,
    }
  ],
  patientScans:  [
    {
      details: String,
      image: String,
      date: Date,
    }
  ],
  patientLabTests:  [
    {
      details: String,
      image: String,
      date: Date,
    }
  ],
});

module.exports = mongoose.model("Patients", PatientSchema);
