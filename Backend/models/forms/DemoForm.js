const mongoose = require("mongoose");

const demoForm = mongoose.Schema({
    created: {
      type: Date,
      default: Date.now
    },
    email: {
      type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    }
});

module.exports = mongoose.model("DemoForm", demoForm);
