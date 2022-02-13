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
  const { sendFrom, subjectData, sendText } = req.body;
  console.log("req", req.body);
  resp.content = [];
  try {
    // var transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: "587",
    //   auth: {
    //     user: "covidmodel01@gmail.com",
    //     pass: "covidcovid",
    //   },
    // });

    // var mailOptions = {
    //   from: sendFrom,
    //   to: ["covidmodel01@gmail.com", "sophonkripinit@gmail.com"],
    //   subject: subjectData,
    //   text: sendText,
    // };

    // // var mailOptions = {
    // //   from: "testmyemaol@gmail.com",
    // //   to: "sophonkripinit@gmail.com",
    // //   subject: "Sending Email using Node.js",
    // //   text: "That was easy!",
    // // };

    // const sendMail = await transporter.sendMail(
    //   mailOptions,
    //   function (error, info) {
    //     if (error) {
    //       console.log(error);
    //       return error;
    //     } else {
    //       return info.response;
    //       console.log("Email sent: " + info.response);
    //     }
    //   }
    // );

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "587",
      auth: {
        user: "covidmodel01@gmail.com",
        pass: "covidcovid",
      },
    });

    let info = await transporter.sendMail({
      from: "user" + `${sendFrom}`,
      to: ["covidmodel01@gmail.com", "sophonkripinit@gmail.com"],
      subject: subjectData,
      text: `${sendFrom}` + ":" + sendText,
    });
    console.log("info", info.response);

    resp.content.push(info.response);
    resp.status = "2000";
    resp.msg = "Success";
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send(resp);
  }
});

module.exports = router;
