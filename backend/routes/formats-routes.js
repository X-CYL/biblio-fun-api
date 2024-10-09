const express = require("express");
const {
  getFormats,
  setFormats,
  editFormats,
  deleteFormats,
} = require("../controllers/format.controller");
const router = express.Router();

router.get("/", getFormats);
router.post("/", setFormats);
router.put("/:id", editFormats);
router.delete("/id", deleteFormats);

module.exports = router;
