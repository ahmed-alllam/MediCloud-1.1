const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
  doctorPhone: {
    type: String,
  },
  doctorFirstName: {
    type: String,
    required: true
  },
  doctorLastName: {
    type: String,
    required: true
  },
  doctorPhoto: {
    type: String,
  },
  doctorEmail: {
    type: String
  },
  password: {
    type: String
  },
  doctorID: {
    type: String,
  },
  doctorCity: {
    type: String
  },
  doctorGender: {
    type: String
  },
  doctorAddress: {
    type: String
  },
  doctorSpeciality: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const bcrypt = require('bcrypt');

DoctorSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Doctors", DoctorSchema);
