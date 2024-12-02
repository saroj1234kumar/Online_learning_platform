import React from "react";
import { bg1 } from "@/assets/index";
import router, { useRouter } from "next/router";
import Link from "next/link";
import About from "../home/About";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="relative h-screen bg-slate-900">
      {/* Fullscreen image */}
      {/* <img
        src={bg1.src}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      /> */}

      {/* Transparent Navbar */}
      <div className="nav_bar w-full h-20 bg-cyan-500 relative ">
        <nav className="absolute top-0 left-0 w-full   p-4 px-14 z-20 flex justify-between text-center">
          <div className="text-slate-950 font-extrabold text-lg text-center p-4 rounded-full ">
            <h1>KnowledgePath</h1>
          </div>
          <div className="ul  bg-cyan-700 p-3 rounded-full pl-10 pr-10 m-2">
            <ul className="flex space-x-12 text-white text-xl font-bold">
              <li>
                <a href="#" className="hover:text-gray-300 ">
                  Home
                </a>
              </li>
              <li>
                <a href="login" className="hover:text-gray-300">
                  Login
                </a>
              </li>
              <li>
                {/* <a href="/home/About" className="hover:text-gray-300">
                  About
                </a> */}
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 w-70 ">
        <div className="  p-8 rounded-lg shadow-lg text-center text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4 w-55">
            Welcome to KnowledgePath
          </h1>
          <p className="text-white mb-4">
            Unlock your learning potential with KnowledgePath. Explore, learn,
            and grow—join us today!
          </p>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-300  hover:text-black transition text-lg font-semibold"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Right-side login form */}
      {/* <div className="flex items-center justify-end h-full z-10">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 shadow-lg rounded-lg mr-4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder='Enter email address'
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500  text-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
               onClick={moveToHome}>
              Login
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}
