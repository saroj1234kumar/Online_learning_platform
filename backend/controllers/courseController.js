// controllers/courseController.js
const Course = require("../models/coursesModel");

const pool = require("../config/db");
const bcrypt = require("bcrypt");

const addCourseWithFile = async (req, res) => {
  try {
    const { title, description } = req.body;
    // Insert course data along with video into the database

    // Check if the video file is provided
    if (!req.file) {
      return res.status(400).json({ error: "Video file is required" });
    }
    console.log(req.file);
    
    // check all the fields
    if (!title || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    let video_path = req.file.originalname
    const newCourse = await Course.create({
      title,
      description,
      video_path
    });

    
// vid.new.mp4
    // Return success response
    res.status(201).json({
      message: "Course added successfully!",
      course: newCourse,
    });
  } catch (error) {
    console.error("Error adding course:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getCourseCount = async ( req, res) => {
  try {
    // Query the database to count students
    const query = `SELECT COUNT(*) AS count FROM courses`;
    const [rows] = await pool.query(query);

    // Extract the count from the query result
    const count = rows[0]?.count || 0;

    console.log("Fetched student count:", count);

    // Return the count in the response
    return res.status(200).json({
      message: "Course count fetched successfully",
      count, // Include the count in the response
    });
  } catch (err) {
    console.error("Error fetching course count:", err.message);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};



// Fetch and Search Courses
const getCourses = async (req, res) => {
  try {
    const { query } = req.query; // Search query from request

    // Fetch all courses if no search query is provided
    let courses;
    if (query) {
      courses = await Course.find({
        title: { $regex: query, $options: 'i' }, // Case-insensitive search
      });
    } else {
      courses = await Course.findAll();
    }

    res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const getAllCourses = async (req, res) => {
  try {
    // Query the database to fetch all courses
    const query = 'SELECT * FROM courses';
    const [rows] = await pool.query(query);

    console.log("Fetched courses:", rows);

    // Return the courses in the response
    return res.status(200).json({
      message: "Courses fetched successfully",
      courses: rows, // Include the courses data in the response
    });
  } catch (error) {
    console.error("Error fetching courses:", error.message);

    // Handle internal server error
    return res.status(500).json({
      error: "An internal server error occurred",
    });
  }
};

const coursesDelete= async (req, res) => {
  const { id } = req.params;
  try {
    const query = `DELETE FROM courses WHERE id = '${id}'`;
    const [result] = await pool.query(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "An internal server error occurred" });
  }
};



module.exports = { addCourseWithFile,getCourseCount,getCourses,getAllCourses,coursesDelete };
