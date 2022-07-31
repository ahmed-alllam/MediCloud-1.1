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
      Name: String,
      Phone: Number
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
      Name: String,
      Dose: String,
      Image: String,
      'Start Date': Date,
      'End Date': Date
    }
  ],
  patientDiseases: [
    {
      'Name': String,
      'Details': String,
      'Image': String,
      'Start Date': Date,
      'End Date': Date
    }
  ],
  patientFamilyHistory: [
    {
      Name: String,
      'Family Member': String,
      Image: String,
      'Start Date': Date,
      'End Date': Date
    }
  ],
  patientImmunizations: [
    {
      Name: String,
      Details: String,
      Image: String,
      Date: Date,
    }
  ],
  patientAllergies: [
    {
      Name: String,
      Details: String,
      Image: String,
      'Start Date': Date,
      'End Date': Date
    }
  ],
  patientPrescriptions: [
    {
      Details: String,
      Image: String,
      Date: Date,
    }
  ],
  patientScans:  [
    {
      Details: String,
      Image: String,
      Date: Date,
    }
  ],
  patientLabTests:  [
    {
      Details: String,
      Image: String,
      Date: Date,
    }
  ],
});

module.exports = mongoose.model("Patients", PatientSchema);
