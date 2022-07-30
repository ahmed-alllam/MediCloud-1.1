const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

const bcrypt = require('bcrypt');

// Initialize express
const app = express();

// Middleware
app.use(cors())


const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const Doctor = require("./models/doctors/Doctors");
const Visit = require("./models/visits/Visits");
const Patient = require("./models/patients/Patients");
const Admin = require("./models/admins/Admins");
const DemoForm = require("./models/forms/DemoForm");
const NewsletterForm = require("./models/forms/NewsletterForm");


beforeSave = async (request) => {
  if (request.payload.password) {
    request.payload = {
      ...request.payload,
      password: await bcrypt.hash(request.payload.password, 10)
    }
  }
  return request
};

admin_options = {
  properties: {
    password: {
      type: 'string',
      isVisible: {
        list: false, edit: true, filter: false, show: false,
      },
    },
  },
  actions: {
    new: {
      before: beforeSave,
    },
    edit: {
      before: beforeSave,
    }
  }
}



const adminBro = new AdminBro({
  resources: [{ resource: Admin, options: admin_options },
  { resource: Doctor, options: admin_options }, Visit, Patient, DemoForm, NewsletterForm],
  rootPath: '/admin',
  branding: {
    companyName: "MediCloud"
  }
})

// const router = AdminBroExpress.buildRouter(adminBro)

const auth_router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const admin = await Admin.findOne({ email })
    if (admin) {
      if (bcrypt.compareSync(password, admin.password)) {
        return admin
      }
    }
    return false
  },
  cookiePassword: 'session Key',
})

// app.use(adminBro.options.rootPath, router)
app.use(adminBro.options.rootPath, auth_router)



// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const jsonwebtoken = require("jsonwebtoken");

app.use(function (req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
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

const doctorsRoutes = require("./routes/doctors")
app.use('/', doctorsRoutes)

const formsRoutes = require("./routes/forms")
app.use('/', formsRoutes)

app.get("/", (req, res) => {
  res.send("Ok");
});

//  DB Connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connection successful");
  }
);

// Listen
app.listen(process.env.PORT);