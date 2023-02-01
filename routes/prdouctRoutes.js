const express = require("express");
const { productController } = require("../controllers/productController.js");
const router = express.Router();

router.get("/", productController.getAll);
router.post("/", productController.Add);
router.delete("/:id", productController.Delete);

module.exports = router;
