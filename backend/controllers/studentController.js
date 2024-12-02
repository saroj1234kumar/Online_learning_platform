const pool = require("../config/db");
const bcrypt = require("bcrypt");

// Create User

// Controller to create a new student

exports.createStudent = async (req, res) => {
  const { name, email, password, phone_number, usertype } = req.body;

  try {
    console.log("Received data:", req.body); // Log the received data for debugging
    const query = `
      INSERT INTO student (Name, Email, Password, PhoneNumber, Usertype) 
      VALUES ('${name}', '${email}', '${password}', '${phone_number}', '${usertype}')
    `;

    console.log("Query:", query); // Log the SQL query being executed

    const [result] = await pool.query(query);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      user_id: result.insertId,
    });
  } catch (err) {
    console.error("Error in creating student:", err.message); // Log error details
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
};

exports.loginStudent = async (req, res) => {
  try {
    const { email, password, usertype } = req.body;
    console.log("Request Body:", req.body); // Log the request body for debugging

    if (!email || !password || !usertype) {
      return res.status(400).send({
        message:
          "Please enter username, password, and select the correct user type",
      });
    }

    const query = `SELECT * FROM student WHERE Email = '${email}'`;
    const [rows] = await pool.query(query, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "user not registered..." });
    }

    const user = rows[0];
    console.log("User data:", user);

    return res.status(200).json({
      message: "Login successful",

      userType: user.usertype,
      id: user.StudentID,
    });
  } catch (err) {
    console.error("Error logging in user:", err.message); // Log the exact error
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("XYDDD:-", req.params);

    const query = `SELECT * FROM student WHERE StudentID = '${id}'`;
    const [rows] = await pool.query(query);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const user = rows[0];
    console.log("Student", user);

    res.status(200).json({ message: "User findbyId successful", user: user });
  } catch (err) {
    console.error("Error fetching user by ID:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getStudent = async (req, res) => {
  try {
    // Query the database to fetch all students
    const query = `SELECT * FROM student`;
    const [rows] = await pool.query(query);

    // Check if no students are found
    if (rows.length === 0) {
      return res.status(404).json({ error: "No students found" });
    }

    console.log("Fetched student data:", rows);

    // Return the fetched student data
    return res.status(200).json({
      message: "Students fetched successfully",
      data: rows, // Include the students in the response
    });
  } catch (err) {
    console.error("Error fetching student data:", err.message);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};

// Controller to get the count of students
exports.getStudentCount = async (req, res) => {
  try {
    // Query the database to count students
    const query = `SELECT COUNT(*) AS count FROM student`;
    const [rows] = await pool.query(query);

    // Extract the count from the query result
    const count = rows[0]?.count || 0;

    console.log("Fetched student count:", count);

    // Return the count in the response
    return res.status(200).json({
      message: "Student count fetched successfully",
      count, // Include the count in the response
    });
  } catch (err) {
    console.error("Error fetching student count:", err.message);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};
