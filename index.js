const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.static(__dirname));

const { DatabaseConfig } = require("./database/databaseConfig");
const DatabaseConnect = require("./database/databaseConnect").DatabaseConnect;
const databaseConfig = DatabaseConfig();

const test = require("./routers/test");
const sendMail = require("./routers/sendMail");

var port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  var responseObject = {
    status: true,
    data: { text: "hello" },
  };
  res.json(responseObject);
});

const serve = app.listen(port, () => {
  console.log("Server listening on ", port);
});

try {
  const dbConn = new DatabaseConnect(databaseConfig).getConnection();
  dbConn.then(async () => {
    app.use(test);
    app.use(sendMail);
  });
} catch (error) {
  console.log(error);
}
