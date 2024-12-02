import React from "react";
import { navArr } from "@/utils/index";
import { useRouter } from "next/router";
import Link from "next/link";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { logo } from '@/assets/Home';
import { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDarkMode } from "@/context/Darkmodecontext";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminHeader({ setOpen, open }: any) {
  const router = useRouter();
  const currentPath = router.pathname;
  // const { darkMode, toggleDarkMode } = useDarkMode();
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userID, setUserID] = useState("");

  const [showSidebar, setShowSidebar] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleLeftSidebar = () => {
    setShowLeftSidebar(!showLeftSidebar);
  };

  const handleLogout = () => {
    console.log("User logged out");

    // Redirect to the home screen
    router.push("/");
  };

  useEffect(() => {
    // Get userID from localStorage
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);

      // Fetch user details using the userID
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:3093/api/admin/get/${storedUserID}`
          );

          if (response.ok) {
            const data = await response.json();
            console.log("User Details:", data);

            // Update state with fetched data
            setUserName(data.user.Name); // Assuming the API returns a "user" object
            setUserType(data.user.usertype); // Adjust keys if needed
            setUserEmail(data.user.userEmail);
            setUserPhone(data.user.PhoneNumber);
          } else {
            console.error(
              "Failed to fetch user details. Status:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md h-auto md:h-28 text-white p-3">
      <div className="container flex flex-row justify-between items-center gap-4 md:gap-10">
        <div className="text-3xl rounded-3xl font-bold p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ">
          <div className="flex items-center space-x-2">
            <span className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-red-200 rounded-full p-3">
              🕮
            </span>
            <h1 className="text-5xl font-bold">KnowledgePath</h1>
          </div>
        </div>
        {/* <div className="flex items-center gap-x-6 ">
          <input
            type="text"
            placeholder="Search Courses..."
            // onChange={handleInputChange}
            className="border p-2 rounded h-16 w-96 text-xl "
          />
          <button className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700">
            <SearchOutlinedIcon className="text-2xl" />
          </button>
        </div> */}

        <div className="px-10 flex gap-10">
          {/* <button className='py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700' 
        onClick={toggleLeftSidebar}>
            <DehazeOutlinedIcon className='text-xl'/>
        </button> */}

          <button
            className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <PermIdentityOutlinedIcon className="text-xl" />
          </button>

          <button className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700">
            <SettingsOutlinedIcon className="text-xl" />
          </button>
        </div>
      </div>

      {showSidebar && (
        <div className="absolute top-24 right-4 md:right-16 h-90 w-99  bg-gradient-to-r from-indigo-400 to-purple-500 shadow-2xl p-7 transition-transform transform rounded-md">
          {/* <button
            className="absolute top-2 right-2 bg-red-600 hover:bg-gray-700 text-white hover:text-white"
            onClick={() => setShowSidebar(false)}
          >
            <CloseOutlinedIcon className="size-11" />
          </button> */}

          <button
            className="absolute top-1 right-1 bg-slate-600 hover:bg-red-700 text-white hover:text-white font-semibold py-1 px-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowSidebar(false)}
          >
            <CloseOutlinedIcon className="text-xs" />
          </button>

          {/* <div className="header bg-red-500 flex items-center justify-center h-12 rounded-xl text-2xl">
            <h1>{userType || "Unknown"} Details</h1>
          </div> */}

          <div className="header bg-indigo-700 flex items-center justify-center h-12 rounded-xl text-2xl">
            <h1 className="text-white">{userType || "Unknown"} Details</h1>
          </div>

          {/* <div className="header bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center h-12 rounded-xl text-white text-2xl">
            <h1>{userType || "Unknown"} Details</h1>
          </div> */}

          <div className="flex flex-col  mt-5  bg-gradient-to-r from-indigo-400 to-purple-600 p-3 rounded-2xl">
            {/* <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-400 rounded-full mb-4"></div> */}
            <h2 className="text-lg md:text-2xl font-mono text-lime-950">
              Profile Type : {userType || "Unknown"} Profile
            </h2>
            <h2 className="text-lg md:text-2xl font-mono text-lime-950">
              Name : {userName || "Guest"}
            </h2>
            <h2 className="text-lg md:text-2xl font-mono text-lime-950">
              Email: {userEmail || "Guest"}
            </h2>
            <h2 className="text-lg md:text-2xl font-mono text-lime-950">
              Ph-no. : {userPhone || "Guest"}
            </h2>

            {/* <h1 className="text-lg md:text-2xl font-bold text-lime-950">
              {userType || "Unknown"} Profile
            </h1> */}
            {/* <button
              className="py-2 px-4 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </button> */}
          </div>
          {/* <button
            className="py-2 px-4 w-full mt-20 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:text-white transition-all duration-300"
            onClick={handleLogout}
          >
            Logout
          </button> */}

          <button
            className="py-2 px-4 w-full mt-8 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:text-white transition-all duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      {showLeftSidebar && (
        <div className="absolute top-30 left-0    transition-transform transform">
          {/* Close Icon */}
          <Sidebar />
        </div>
      )}
    </section>
  );
}
