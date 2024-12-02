import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed

export default function Login() {
  const router = useRouter(); // For navigation
  const [loginRole, setLoginRole] = useState("Student"); // Role state (default: Student)
  const [email, setEmail] = useState(""); // Email input
  const [password, setPassword] = useState(""); // Password input
  const [message, setMessage] = useState(""); // Message (error or success)
  const [isError, setIsError] = useState(false); // Error state toggle

  // Function to toggle the login role
  const handleRoleToggle = (role: string) => {
    setLoginRole(role); // Set role (Student/Admin)
    setMessage("");
    setIsError(false);
  };

  // Function to handle login submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission

    const loginData = {
      email,
      password,
      usertype: loginRole.toLowerCase(), // Convert role to lowercase for API consistency
    };

    try {
      const url =
        loginRole === "Student"
          ? "http://localhost:3093/api/student/login" // API for student login
          : "http://localhost:3093/api/admin/login"; // API for admin login

      const response = await axios.post(url, loginData);
      console.log("object:", response.data);
      if (response.status === 200) {
        const { id, userType } = response.data;

        // Save to localStorage
        localStorage.setItem("userID", id);
        localStorage.setItem("userType", userType);

        console.log(
          "User ID saved in localStorage:",
          localStorage.getItem("userID")
        );
        // Navigate based on user role
        if (userType === "student") {
          router.push("home"); // Redirect to student dashboard
        } else if (userType === "admin") {
          router.push("admindashboard"); // Redirect to admin dashboard
        }
      }
    } catch (error: any) {
      // Handle errors and display messages
      const errorMessage =
        error.response?.data?.error ||
        "An unexpected error occurred. Please try again later.";

      setMessage(errorMessage); // Set error message
      setIsError(true); // Mark as error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Role Toggle Buttons */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4  py-2 rounded-l ${
              loginRole === "Student"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleRoleToggle("Student")}
          >
            Login as Student
          </button>
          <button
            className={`px-4 py-2 rounded-r ${
              loginRole === "Admin"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleRoleToggle("Admin")}
          >
            Login as Admin
          </button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`mb-4 text-center ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}

        <h2 className="text-3xl text-slate-600 font-bold mb-6 text-center">
          Login as {loginRole || "Student"}
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border text-slate-600 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border text-slate-600 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/registration" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
