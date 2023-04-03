const express = require("express");
const { getImage, addImage, deleteImage } = require("./controller");
const router = express.Router();

router.get("/", getImage);
router.post("/", addImage);
router.delete("/:id", deleteImage);

module.exports = router;
