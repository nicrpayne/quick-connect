const { response } = require("express");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

router.post("/", (req, res) => {

  client.messages
    .create({
      body: req.body.message,
      to: 1 + req.body.mobile,
      from: "+16124284192",
    })
    .then((message) => res.send(`The message to : ${message.to} was sent!`));
});

module.exports = router;
