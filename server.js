const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
// app.use(express.static(__dirname));

const test = require("./routers/test");

const serve = app.listen(port.proof, () => {
  console.log("Server listening on ", port.proof);
});

try {
  const dbConn = new DatabaseConnect(databaseConfig).getConnection();
  dbConn.then(async () => {
    app.use(test);
  });
} catch (error) {
  console.log(error);
}
