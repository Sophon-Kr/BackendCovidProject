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
