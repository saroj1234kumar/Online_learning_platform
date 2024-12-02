const express = require("express");
const router = express.Router();

const {
  createStudent,
  loginStudent,
  getStudentById,
  getStudent,
  getStudentCount,
} = require("../controllers/studentController");

router.route("/create").post(createStudent);

router.route("/login").post(loginStudent);
router.route("/getall").get(getStudent);

router.route("/get/:id").get(getStudentById);

router.route("/count").get(getStudentCount);

// router.route("/update/:id")
// .patch(updateUser);

// router.route("/delete/:id")
// .delete(deleteUser);

module.exports = router;
