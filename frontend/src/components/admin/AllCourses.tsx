import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editingCourse, setEditingCourse] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3093/api/course//getall"
        );
        setCourses(response.data.courses); // Assuming the backend sends data in { courses: [...] }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to fetch courses.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const deleteCourse = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3093/api/courses/${id}`); // API endpoint for deletion
      setCourses(courses.filter((course) => course.id !== id)); // Remove the course from state
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete the course.");
    }
  };

  const handleUpdate = async (id: any) => {
    try {
      await axios.put(`http://localhost:3093/api/courses/${id}`, {
        title: updatedTitle,
        description: updatedDescription,
      });

      // Update the course in state
      setCourses(
        courses.map((course) =>
          course.id === id
            ? {
                ...course,
                title: updatedTitle,
                description: updatedDescription,
              }
            : course
        )
      );

      // Reset editing state
      setEditingCourse(null);
      setUpdatedTitle("");
      setUpdatedDescription("");
    } catch (err) {
      console.error("Error updating course:", err);
      alert("Failed to update the course.");
    }
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="p-4 flex-1 overflow-auto">
        <h2 className="text-2xl font-semibold bg-slate-900 p-3 text-center mb-4">All Courses</h2>
        <table className="min-w-full table-auto border-collapse bg-slate-500">
          <thead>
            <tr className="bg-gray-500">
              <th className="px-4 py-2 border">Course ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) && courses.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-2 text-center border">
                  No courses found
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-4 py-2 border">{course.id}</td>
                  <td className="px-4 py-2 border">
                    {editingCourse === course.id ? (
                      <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        className="border p-1 bg-black w-full"
                      />
                    ) : (
                      course.title
                    )}
                  </td>
                  <td className="px-4 py-2 border flex justify-between items-center">
                    <span className="flex-1">
                      {editingCourse === course.id ? (
                        <input
                          type="text"
                          value={updatedDescription}
                          onChange={(e) =>
                            setUpdatedDescription(e.target.value)
                          }
                          className="border bg-black p-1 w-full"
                        />
                      ) : (
                        course.description
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-2 border ">
                    {editingCourse === course.id ? (
                      <>
                        <button
                          className="rounded-md px-3 py-1 bg-green-500 text-white hover:bg-green-600 mr-2"
                          onClick={() => handleUpdate(course.id)}
                        >
                          Save
                        </button>
                        <button
                          className="rounded-md px-3 py-1 bg-gray-500 text-white hover:bg-gray-600"
                          onClick={() => setEditingCourse(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="rounded-md px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => {
                          setEditingCourse(course.id);
                          setUpdatedTitle(course.title);
                          setUpdatedDescription(course.description);
                        }}
                      >
                        Edit
                      </button>
                    )}

                    <button
                      className="rounded-md px-3 py-1 bg-red-500 text-white hover:bg-red-600"
                      onClick={() => deleteCourse(course.id)}
                    >
                      Delete
                    </button>
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

export default AllCourses;
