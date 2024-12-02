// models/StudentRegistration.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming you have configured a database instance in 'config/database.js'
const add = require('./student');

const add = sequelize.define('student', {
  StudentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
 
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensures the value is a valid email
    },
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  
  PhoneNumber: {
    type: DataTypes.STRING(15),
  },
  usertype: {
    type: DataTypes.ENUM( 'student'),  // ENUM for user type
    allowNull: false,
    defaultValue: 'student' 
}
 
}, {
  tableName: 'student', // Table name in the database
  timestamps: false, // Disable automatic 'createdAt' and 'updatedAt' fields
});

module.exports = add;
