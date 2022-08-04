const express = require("express");
const router = express.Router();
const Doctors = require("../models/doctors/Doctors");

const jwt = require('jsonwebtoken');

router.post("/api/doctors/login/", async (req, res) => {
    Doctors.findOne({
        doctorEmail: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.doctorEmail, fullName: user.doctorFirstName + ' ' + user.doctorLastName, _id: user._id }, 'RESTFULAPIs') });
    });
});

module.exports = router;