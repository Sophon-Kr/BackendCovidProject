const express = require("express");
const router = express.Router();
const getConnection = require("typeorm");
var nodemailer = require("nodemailer");

var resp = {
  status: "1000",
  msg: "Access Denied",
  content: [],
};

router.post("/sendmail", async (req, res, next) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "covidmodel01@gmail.com",
        pass: "covidcovid",
      },
    });

    var mailOptions = {
      from: "testmyemaol@gmail.com",
      to: "sophonkripinit@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    const sendMail = transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    resp.content.push(sendMail);
    resp.status = "2000";
    resp.msg = "Success";
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send(resp);
  }
});

module.exports = router;
