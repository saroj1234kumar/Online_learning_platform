const pool = require('../config/db');
const bcrypt = require('bcrypt');

// Create User


// Controller to create a new student


exports.createAdmin = async (req, res) => {
    // Corrected destructuring to match the input data
    const { Name, Email, Password, PhoneNumber, usertype } = req.body;
  
    try {
      console.log("Received data:", req.body); // Log the received data for debugging
      const query = `
        INSERT INTO admin (Name, Email, Password, PhoneNumber, usertype) 
        VALUES ('${Name}', '${Email}', '${Password}', '${PhoneNumber}', '${usertype}')
      `;
  
      console.log("Query:", query); // Log the SQL query being executed
  
      const [result] = await pool.query(query);
  
      res.status(201).json({
        success: true,
        message: "Admin registered successfully",
        user_id: result,
      });
    } catch (err) {
      console.error("Error in creating admin:", err.message); // Corrected log message
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  };
  


  exports.loginAdmin = async (req, res) => {
    try {
      const { email, password, usertype } = req.body;
      console.log("Request Body:", req.body); // Log the request body for debugging
  
      if (!email || !password || !usertype) {
        return res.status(400).send({
          message:
            "Please enter username, password, and select the correct user type",
        });
      }
  
     
      const query = `SELECT * FROM admin WHERE Email = '${email}'`;
      const [rows] = await pool.query(query, [email]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: "user not registered..." });
      }
  
      const user = rows[0];
      console.log("User data:", user);
  
     
      return res.status(200).json({
        message: "Login successful",
      
        userType: user.usertype,
        id: user.AdminID,
      });
    } catch (err) {
      console.error("Error logging in user:", err.message); // Log the exact error
      return res.status(500).json({ error: "An internal server error occurred" });
    }
  };


  exports.getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("XYDDD:-", req.params);
  
      const query = `SELECT * FROM admin WHERE AdminID = '${id}'`;
      const [rows] = await pool.query(query);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      const user = rows[0];
      console.log("Admin", user);
  
      res.status(200).json({ message: "User findbyId successful", user: user });
    } catch (err) {
      console.error("Error fetching user by ID:", err.message);
      res.status(500).json({ error: err.message });
    }
  };

  










