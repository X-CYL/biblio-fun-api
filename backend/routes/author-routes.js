const express = require("express");
const {
  getAuthors,
  setAuthors,
  editAuthors,
  deleteAuthors,
} = require("../controllers/authors.controller");
const router = express.Router();

router.get("/", getAuthors);
router.post("/", setAuthors);
router.put("/:id", editAuthors);
router.delete("/id", deleteAuthors);

module.exports = router;
