const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Assuming database configuration is in 'config/db.js'

// Your Sequelize database instance

const Course = sequelize.define(
  "Courses",
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    video_path: {
      type: DataTypes.STRING(255),
      allowNull: false, // Video file data as BLOB
    },
  },
  {
    tableName: "courses",
    timestamps: false,
  }
);

module.exports = Course;
