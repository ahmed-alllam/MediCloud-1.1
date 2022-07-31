const express = require("express");
const router = express.Router();
const Patients = require("../models/patients/Patients");

// Adds a patient
router.post("/api/patients/", async (req, res) => {
  const patient = new Patients({
    patientPhone: req.body['Phone'],
    patientFirstName: req.body['First Name'],
    patientLastName: req.body['Last Name'],
    patientEmail: req.body['Email'],
    patientMediCardID: req.body['MediCard ID'],
    patientBirthDate: req.body['Birthdate'],
    patientCity: req.body['City'],
    patientBloodType: req.body['Blood Type'],
    patientEmergencyContacts: req.body['Emergency Contacts'],
    patientGender: req.body['Gender'],
    patientStatus: req.body['Status'],
    patientHeight: req.body['Height'],
    patientWeight: req.body['Weight'],
    patientMedications: req.body['Medications'],
    patientDiseases: req.body['Diseases'],
    patientFamilyHistory: req.body['Family History'],
    patientImmunizations: req.body['Immunizations'],
    patientAllergies: req.body['Allergies'],
    patientPrescriptions: req.body['Prescriptions'],
    patientScans: req.body['Scans'],
    patientLabTests: req.body['Lab Tests'],
  });
  try {
    const savedPatient = await patient.save();
    res.json(savedPatient);
    console.log(savedPatient._id);
  } catch (err) {
    res.status(400).json({
      msg: err
    });
  }
});

// Get a specific patient by medicard id
router.get("/api/patients/medicard/:patientId", async (req, res) => {
  try {
    const patient = await Patients.findOne({
      patientMediCardID: req.params.patientMediCardID
    });
    res.json(patient);
  } catch (err) {
    res.json({
      msg: err
    });
  }
});

// Update a specific patient
router.patch("/api/patients/:patientId", async (req, res) => {
  try {
    const updatedPatient = await Patients.findById(req.params.patientId);

    updatedPatient.patientPhone = req.body['Phone'];
    updatedPatient.patientFirstName = req.body['First Name'];
    updatedPatient.patientLastName = req.body['Last Name'];
    updatedPatient.patientEmail = req.body['Email'];
    updatedPatient.patientMediCardID = req.body['MediCard ID'];
    updatedPatient.patientBirthDate = req.body['Birthdate'];
    updatedPatient.patientCity = req.body['City'];
    updatedPatient.patientBloodType = req.body['Blood Type'];
    updatedPatient.patientEmergencyContacts = req.body['Emergency Contacts'];
    updatedPatient.patientGender = req.body['Gender'];
    updatedPatient.patientStatus = req.body['Status'];
    updatedPatient.patientHeight = req.body['Height'];
    updatedPatient.patientWeight = req.body['Weight'];
    updatedPatient.patientMedications = req.body['Medications'];
    updatedPatient.patientDiseases = req.body['Diseases'];
    updatedPatient.patientFamilyHistory = req.body['Family History'];
    updatedPatient.patientImmunizations = req.body['Immunizations'];
    updatedPatient.patientAllergies = req.body['Allergies'];
    updatedPatient.patientPrescriptions = req.body['Prescriptions'];
    updatedPatient.patientScans = req.body['Scans'];
    updatedPatient.patientLabTests = req.body['Lab Tests'];

    await updatedPatient.save();
    res.json(updatedPatient);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
