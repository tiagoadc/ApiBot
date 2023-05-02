const express = require("express");
const cors = require("cors");
//const moment = require('moment')
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
router.use(cors());

router.get("/getconection", require("./api/controller").getOracle);
router.post(
  "/postFile",
  upload.single("file"),
  require("./api/controller").postFile
);

module.exports = router;
