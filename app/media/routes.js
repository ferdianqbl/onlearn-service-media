const express = require("express");
const { getImage } = require("./controller");
const router = express.Router();

router.post("/", getImage);

module.exports = router;
