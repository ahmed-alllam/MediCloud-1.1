const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  patientPhone: {
    type: String,
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
  patientPIN : {
    type: String,
    required: true
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
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  patientEmergencyContacts: [
    {
      Name: String,
      Phone: String
    }
  ],
  patientGender: {
    type: String,
    enum: ["Male", "Female"],
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
      Name: String,
      Dose: String,
      Details: String,
      Image: String,
      Date: {
        type: Date,
        default: Date.now
      },
    }
  ],
  patientScans: [
    {
      Details: String,
      Image: String,
      Date: {
        type: Date,
        default: Date.now
      },
    }
  ],
  patientLabTests: [
    {
      Details: String,
      Image: String,
      Date: {
        type: Date,
        default: Date.now
      },
    }
  ],
});

module.exports = mongoose.model("Patients", PatientSchema);
