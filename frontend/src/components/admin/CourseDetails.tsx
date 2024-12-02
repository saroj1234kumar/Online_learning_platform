import React, { useState } from "react";
import axios from "axios";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!title || !description || !video) {
      setError("All fields are required.");
      return;
    }
    console.log("object");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video_path", video); // 'file' key should match the backend multer setup

    try {
      const response = await axios.post(
        "http://localhost:3093/api/course/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setSuccessMessage(response.data.message || "Course added successfully!");
      setTitle("");
      setDescription("");
      setVideo(null);
      setError("");
    } catch (err: any) {
      console.error(
        "Error during submission:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.error ||
          "An error occurred while submitting the form."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-700 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Course</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border text-black rounded"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Video Upload */}
        <div className="mb-4">
          <label htmlFor="video" className="block font-medium mb-2">
            Upload Video
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full text-black"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
