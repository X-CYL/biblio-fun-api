const express = require("express");
const {
  getCreators,
  setCreators,
  editCreators,
  deleteCreators,
} = require("../controllers/authors.controller");
const { getCreators, setCreators, editCreators, deleteCreators } = require("../controllers/creators.controller");
const router = express.Router();

router.get("/", getCreators);
router.post("/", setCreators);
router.put("/:id", editCreators);
router.delete("/id", deleteCreators);

module.exports = router;
