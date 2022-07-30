const mongoose = require("mongoose");

const newsletterForm = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String
  },
});

module.exports = mongoose.model("NewsletterForm", newsletterForm);
