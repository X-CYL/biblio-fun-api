const express = require("express");
const {
  getCategories,
  setCategories,
  editCategories,
  deleteCategories,
} = require("../controllers/categories.controller");
const router = express.Router();

router.get("/", getCategories);
router.post("/", setCategories);
router.put("/:id", editCategories);
router.delete("/id", deleteCategories);

module.exports = router;
