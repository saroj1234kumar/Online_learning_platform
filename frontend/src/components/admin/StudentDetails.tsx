import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

const StudentDetails = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  // Fetching student data on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Making API call to fetch student data
        const response = await axios.get('http://localhost:3093/api/student/getall');
        console.log('Fetched Data:', response.data); // Debugging
        // Set students data from API response
        setStudents(response.data.data); // Assuming the data key is 'data' in the response
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to load student data');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="flex h-screen bg-slate-700">
      <Sidebar /> {/* Sidebar */}
      <div className="p-4 flex-1 overflow-auto">
        {/* Displaying error message if there is an issue fetching data */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Table Header */}
        <div className="table_header bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 m-3 rounded-full">
          <h2 className="text-4xl text-white  text-center font-semibold mb-4">
            All Students Details{" "}
          </h2>
        </div>

        {/* Table to display students */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-red-700">
              <th className="px-4 py-2 border">Student ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Enrollment ID</th>
              <th className="px-4 py-2 border">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Conditional Rendering: Check if students array is empty */}
            {Array.isArray(students) && students.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center border">
                  No students found
                </td>
              </tr>
            ) : (
              // Rendering students if data is available
              students.map((student: any) => (
                <tr
                  key={student.StudentID}
                  className="bg-white text-black hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border">{student.StudentID}</td>
                  <td className="px-4 py-2 border">{student.Name}</td>
                  <td className="px-4 py-2 border">{student.Email}</td>
                  <td className="px-4 py-2 border">{student.Course}</td>
                  <td className="px-4 py-2 border">{student.enrollment_id}</td>
                  <td className="px-4 py-2 border">
                    {student.enrollment_date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
