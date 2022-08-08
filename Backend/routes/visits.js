const express = require("express");
const router = express.Router();
const Visits = require("../models/visits/Visits");
const Patients = require("../models/patients/Patients");

// Adds a Visit
router.post("/api/visits/", async (req, res) => {
  try {
    if (req.user) {
      const patient = await Patients.findById(req.body.patientId);
      if(!patient) {
        return res.status(404).send("Patient not found");
      }

      // check if this patient has any previous visits with the same doctor
      var isReturnVisit = false;

      const previousVisits = await Visits.find({
        patientId: req.body.patientId,
        doctorId: req.user._id
      });

      if(previousVisits.length > 0)
        isReturnVisit = true;

      const visit = new Visits({
        doctorId: req.user._id,
        patientName: patient.patientFirstName + " " + patient.patientLastName,
        isReturnVisit: isReturnVisit,
        ...req.body
      });

      const savedVisit = await visit.save();
      res.json(savedVisit);
      console.log(savedVisit._id);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.status(401).json({
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
    res.status(401).json({
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

      if (visit.length === 0) {
        return res.status(404).send("Visit not found");
      }

      res.json(visit);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.status(401).json({
      msg: err
    })
  };
})

// Update a specific Visit
router.patch("/api/visits/:visitId", async (req, res) => {
  try {
    if (req.user) {
      const updatedVisit = await Visits.findOne({
        _id: req.params.visitId,
        doctorId: req.user._id
      });

      if(!updatedVisit) {
        return res.status(404).send("Visit not found");
      }

      updatedVisit.patientComplaint = req.body.patientComplaint
      updatedVisit.patientDiagnosis = req.body.patientDiagnosis
      updatedVisit.notes = req.body.notes
      updatedVisit.followUpDate = req.body.followUpDate
      updatedVisit.visitCost = req.body.visitCost

      await updatedVisit.save();
      res.json(updatedVisit);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.status(401).json({ msg: err });
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
    res.status(401).json({ msg: err });
  }
});

module.exports = router;
