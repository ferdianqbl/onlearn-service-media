const express = require("express");
const { getImage, addImage } = require("./controller");
const router = express.Router();

router.get("/", getImage);
router.post("/", addImage);

module.exports = router;
