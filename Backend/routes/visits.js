const express = require("express");
const router = express.Router();
const Visits = require("../models/visits/Visits");

// Adds a Visit
router.post("/api/visits/", async (req, res) => {
  try {
    if (req.user) {
      const visit = new Visits({
        doctorId: req.user._id,
        patientId: req.body.patientId,
        patientName: req.body.patientName,
        patientSymptoms: req.body.patientSymptoms,
        patientDiagnosis: req.body.patientDiagnosis,
        patientVisitDate: req.body.patientVisitDate,
        patientMedications: req.body.patientMedications,
        visitCost: req.body.visitCost,
      });

      const savedVisit = await visit.save();
      res.json(savedVisit);
      console.log(savedVisit._id);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.json({
      msg: err
    });
  }
});

// Gets all visits
router.get("/api/visits/", async (req, res) => {
  try {
    if (req.user) {
      const visits = await Visits.find({ doctorId: req.user._id });
      res.json(visits);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.json({
      msg: err
    });
  }
});

// Get a specific visit
router.get("/api/visits/:visitId", async (req, res) => {
  try {
    if (req.user) {
      const visit = await Visits.find({
        _id: req.params.visitId,
        doctorId: req.user._id
      });
      res.json(visit);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.json({
      msg: err
    })
  };
})

// Update a specific Visit
router.patch("/api/visits/:visitId", async (req, res) => {
  try {
    if (req.user) {
      const updatedVisit = await Visits.find({
        _id: req.params.visitId,
        doctorId: req.user._id
      });
      updatedVisit.patientSymptoms = req.body.patientSymptoms
      updatedVisit.patientDiagnosis = req.body.patientDiagnosis
      updatedVisit.patientMedications = req.body.patientMedications
      updatedVisit.visitCost = req.body.visitCost

      await updatedVisit.save();
      res.json(updatedVisit);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.json({ msg: err });
  }
});

// Delete a specific Visit
router.delete("/api/visits/:visitId", async (req, res) => {
  try {
    if (req.user) {
      const removedVisit = await Visits.deleteOne({
        _id: req.params.visitId,
        doctorId: req.user._id
      });
      res.json(removedVisit);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
