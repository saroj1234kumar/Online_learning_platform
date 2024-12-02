const express = require("express");
const sequelize = require("./config/db");
const bodyParser = require("body-parser");
const pool = require("./config/db");
const fs = require("fs");
const fileUpload = require("express-fileupload");
// const courseRoutes = require("./routes/courseRouter");
const cors = require("cors");
const multer = require("multer");
const Course = require("./models/coursesModel");
const { addCourseWithFile } = require("./controllers/courseController");
const path = require("path");
// const courseController = require("../controllers/courseController");

require("dotenv").config();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

// const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3039;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json()); // This line allows Express to parse JSON request bodies
app.use(bodyParser.json());

// Routes

app.use("/api/student", require("./routes/studentRouter"));
app.use("/api/admin", require("./routes/adminRouter"));
// app.use("/api/", require("./routes")
// Middleware to parse JSON bodies

// Use the course routes
app.use("/api/course/",require("./routes/courseRouter"));

// app.use("/uploads", express.static(path.join(__dirname, "uploads", "videos")));

app.get("/uploads/videos/:id", (req, res) => {
  console.log(__dirname);
  const videoPath = path.join(__dirname, "uploads", "videos", req.params.id);
  res.sendFile(videoPath);
});

app.delete("/api/courses/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from the route parameter
  try {
    const query = `DELETE FROM courses WHERE id = '${id}'`;
    const [result] = await pool.query(query, [id]); // Use parameterized queries to prevent SQL injection

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Course not found" }); // If no rows were affected, course doesn't exist
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error.message); // Log the error
    res.status(500).json({ error: "An internal server error occurred" }); // Send a generic error response
  }
});

app.put("/api/courses/:id", async (req, res) => {
  const { id } = req.params; // Extract the course ID from the route
  const { title, description } = req.body; // Extract updated data from the request body

  try {
    // Validate request body
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    // Update the course in the database using a parameterized query
    const query = `UPDATE courses SET title = '${title}', description = '${description}' WHERE id = '${id}'`;
    const [result] = await pool.query(query, [title, description, id]);

    // Check if the course exists
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({ message: "Course updated successfully" });
  } catch (error) {
    console.error("Error updating course:", error.message);
    res.status(500).json({ error: "An internal server error occurred" });
  }
});




const initiateConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server started on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initiateConnection();
