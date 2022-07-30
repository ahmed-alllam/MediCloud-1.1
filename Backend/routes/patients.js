const express = require("express");
const router = express.Router();
const Patients = require("../models/patients/Patients");

// Adds a patient
router.post("/api/patients/", async (req, res) => {
  const patient = new Patients({
    patientPhone: req.body.patientPhone,
    patientFirstName: req.body.patientFirstName,
    patientLastName: req.body.patientLastName,
    patientEmail: req.body.patientEmail,
    patientMediCardID: req.body.patientMediCardID,
    patientBirthDate: req.body.patientBirthDate,
    patientCity: req.body.patientCity,
    patientBloodType: req.body.patientBloodType,
    patientEmergencyContacts: req.body.patientEmergencyContacts,
    patientGender: req.body.patientGender,
    patientStatus: req.body.patientStatus,
    patientHeight: req.body.patientWeight,
    patientWeight: req.body.patientWeight,
    patientMedications: req.body.patientMedications,
    patientDiseases: req.body.patientDiseases,
    patientFamilyHistory: req.body.patientFamilyHistory,
    patientImmunizations: req.body.patientImmunizations,
    patientAllergies: req.body.patientAllergies,
    patientPrescriptions: req.body.patientPrescriptions,
    patientScans: req.body.patientScans,
    patientLabTests: req.body.patientLabTests,
  });
  try {
    const savedPatient = await patient.save();
    res.json(savedPatient);
    console.log(savedPatient._id);
  } catch (err) {
    res.json({
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

    updatedPatient.patientPhone = req.body.patientPhone;
    updatedPatient.patientFirstName = req.body.patientFirstName;
    updatedPatient.patientLastName = req.body.patientLastName;
    updatedPatient.patientEmail = req.body.patientEmail;
    updatedPatient.patientMediCardID = req.body.patientMediCardID;
    updatedPatient.patientBirthDate = req.body.patientBirthDate;
    updatedPatient.patientCity = req.body.patientCity;
    updatedPatient.patientBloodType = req.body.patientBloodType;
    updatedPatient.patientEmergencyContacts = req.body.patientEmergencyContacts;
    updatedPatient.patientGender = req.body.patientGender;
    updatedPatient.patientStatus = req.body.patientStatus;
    updatedPatient.patientHeight = req.body.patientWeight;
    updatedPatient.patientWeight = req.body.patientWeight;
    updatedPatient.patientMedications = req.body.patientMedications;
    updatedPatient.patientDiseases = req.body.patientDiseases;
    updatedPatient.patientFamilyHistory = req.body.patientFamilyHistory;
    updatedPatient.patientImmunizations = req.body.patientImmunizations;
    updatedPatient.patientAllergies = req.body.patientAllergies;
    updatedPatient.patientPrescriptions = req.body.patientPrescriptions;
    updatedPatient.patientScans = req.body.patientScans;
    updatedPatient.patientLabTests = req.body.patientLabTests;

    await updatedPatient.save();
    res.json(updatedPatient);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
