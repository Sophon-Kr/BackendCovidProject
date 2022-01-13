const express = require("express");
const router = express.Router();
const getConnection = require("typeorm");

var resp = {
  status: "1000",
  msg: "Access Denied",
  content: [],
};

router.get("/test", async (req, res, next) => {
  try {
    resp.content = [];
    const connection = getConnection.createQueryBuilder();
    const realday = await connection.select("*").from(`realday`).getRawMany();

    resp.content.push(realday);
    resp.status = "2000";
    resp.msg = "Success";
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send(resp);
  }
});

// router.put("/asset", async (req, res, next) => {
//   try {
//     resp.content = [];
//     const connection = getConnection.createQueryBuilder();
//     const update = await connection
//       .update("asset", req.body)
//       .updateEntity(true)
//       .returning("*")
//       .execute();

//     console.log("update", update);
//     console.log("update", update.affected);
//     if (update.affected !== 0) {
//       resp.content.push(update.raw[0]);
//       resp.status = "2000";
//       resp.msg = "Success";
//     } else {
//       resp.content = [];
//       resp.status = "1000";
//       resp.msg = "Access Denied";
//     }
//     res.send(resp);
//   } catch (error) {
//     console.log(error);
//     res.send(resp);
//   }
// });

module.exports = router;
