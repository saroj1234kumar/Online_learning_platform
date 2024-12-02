// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
// const fileUpload = require("express-fileupload"); // For file handling
const courseController = require("../controllers/courseController");
const upload = require("../middleware/fileUpload");

// Route to add a course with video file
router.post(
  "/add",
  upload.single("video_path"),
  courseController.addCourseWithFile
);

// router.route("/count").get(getCourseCount);
router.get("/count", courseController.getCourseCount);
router.get("/courses", courseController.getCourses);
router.get("/getall", courseController.getAllCourses);
router.delete("/", courseController.coursesDelete);
module.exports = router;
