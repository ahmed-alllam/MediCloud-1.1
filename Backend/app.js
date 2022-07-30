const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

// Initialize express
const app = express();

// Middleware
app.use(cors())

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const jsonwebtoken = require("jsonwebtoken");

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

// API Routes
const patientsRoutes = require("./routes/patients");
app.use('/', patientsRoutes);

const visitsRoutes = require("./routes/visits")
app.use('/', visitsRoutes)

const billingRoutes = require("./routes/billing")
app.use('/', billingRoutes)

app.get("/", (req, res) => {
  res.send("Ok");
});

//  DB Connection
mongoose.connect(
  // process.env.DB_CONNECTION,
  "mongodb://localhost",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connection successful");
  }
);

// Listen
// app.listen(process.env.PORT);
app.listen(5000);
