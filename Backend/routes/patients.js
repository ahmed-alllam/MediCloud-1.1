const express = require("express");
const router = express.Router();
const Patients = require("../models/patients/Patients");

// Adds a patient
router.post("/api/patients/", async (req, res) => {
  const patient = new Patients({
    ...req.body,
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
      patientMediCardID: req.params.patientId
    });

    if (!patient) {
      res.status(404).json({
        msg: "Patient not found"
      });
    } else {
      res.json(patient);
    }
  } catch (err) {
    res.status(404).json({
      msg: err
    });
  }
});


// Get a specific patient by id
router.get("/api/patients/:patientId", async (req, res) => {
  try {
    const patient = await Patients.findById(req.params.patientId);

    if (!patient) {
      res.status(404).json({
        msg: "Patient not found"
      });
    } else {
      res.json(patient);
    }
  } catch (err) {
    res.status(404).json({
      msg: err
    });
  }
});

// Update a specific patient
router.patch("/api/patients/:patientId", async (req, res) => {
  try {
    const updatedPatient = await Patients.updateOne({_id: req.params.patientId}, {
      $set: {
        ...req.body
      }});
    
    if (!updatedPatient) {
      res.status(404).json({
        msg: "Patient not found"
      });
    } else {
      res.json(updatedPatient);
    }
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

module.exports = router;
