const express = require("express");
const router = express.Router();

const {
  createAdmin,
  loginAdmin,
  getAdminById,
} = require("../controllers/adminController");

router.route("/create").post(createAdmin);

router.route("/login").post(loginAdmin);

router.route("/get/:id").get(getAdminById);

module.exports = router;
