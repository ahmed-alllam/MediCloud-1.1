const express = require("express");
const router = express.Router();
const NewsletterForm = require("../models/forms/NewsletterForm");
const DemoForm = require("../models/forms/DemoForm");

router.post("/forms/newsletter", async (req, res) => {
    try {
        const form = new NewsletterForm({
            email: req.body.email
        });

        const savedForm = await form.save();
        res.json(savedForm);
        console.log(savedForm._id);
    } catch (err) {
        res.json({
            msg: err
        });
    }
});

router.post("/forms/demo", async (req, res) => {
    try {
        const form = new DemoForm({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        });

        const savedForm = await form.save();
        res.json(savedForm);
        console.log(savedForm._id);
    } catch (err) {
        res.json({
            msg: err
        });
    }
});

module.exports = router;