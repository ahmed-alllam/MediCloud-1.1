const express = require("express");
const router = express.Router();
const Visits = require("../models/visits/Visits");

// Gets all billings
router.get("/api/billing/", async (req, res) => {
  try {
    if (req.user) {
      const visits = await Visits.find({ doctorId: req.user._id }).select("created patientName visitCost");
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

module.exports = router;
