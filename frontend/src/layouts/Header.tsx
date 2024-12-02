import React, { useContext, useEffect } from "react";
import { navArr } from "@/utils/index";
import { useRouter } from "next/router";
import Link from "next/link";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { logo } from '@/assets/Home';
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { ThemeContext } from "@/context/Darkmodecontext";
import { Navigation } from "@mui/icons-material";

export default function Header({ setOpen, open }: any) {
  const router = useRouter();
  const currentPath = router.pathname;
  // const { darkMode, toggleDarkMode } = useDarkMode();
  // const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [userID, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [courses, setCourses] = useState([]); // To store course titles
  const [searchQuery, setSearchQuery] = useState(""); // To store search input
  const [showCourseList, setShowCourseList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleLeftSidebar = () => {
    setShowLeftSidebar(!showLeftSidebar);
  };
  const handleLogout = () => {
    router.push("/login");
  };
  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);

      const fetchUserDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:3093/api/student/get/${storedUserID}`
          );

          if (response.ok) {
            const data = await response.json();
            setUserName(data.user.Name);
            setUserType(data.user.usertype);
            setUserEmail(data.user.Email);
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
    }

    // Fetch course titles
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:3093/api/course/courses"
        );
        if (response.ok) {
          const data = await response.json();
          setCourses(data.courses || []); // Adjust according to your API response
        } else {
          console.error("Failed to fetch courses. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    // Fetch course titles
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3093/api/course/getall");
        if (response.ok) {
          const data = await response.json();
          setCourses(data.courses || []);
        } else {
          console.error("Failed to fetch courses. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearchFocus = () => setShowCourseList(true);

  const handleSearch = () => {
    const selectedCourse = courses.find(
      (course) => course.title.toLowerCase() === searchQuery.toLowerCase()
    );

    if (selectedCourse) {
      // Navigate to the dynamic video page with course ID
      router.push(`/video/${selectedCourse.id}`);
    } else {
      alert("No course found with the entered title.");
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // sticky top-0 z-100
    <section className=" bg-gradient-to-r from-blue-600 to-purple-600 shadow-md h-auto md:h-28 text-white p-3 ">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
          <button
            className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            onClick={toggleLeftSidebar}
          >
            <DehazeOutlinedIcon className="text-lg md:text-xl" />
          </button>
          <div className="text-4xl rounded-3xl font-bold p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ">
            <div className="flex items-center space-x-2">
              <span className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-red-200 rounded-full p-3">🕮</span>
              <h1 className="text-5xl font-bold">KnowledgePath</h1>
            </div>
          </div>
        </div>

        {/* when add the search-bar you need to add this  */}
        {/* <button
          className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
          onClick={toggleLeftSidebar}
        >
          <DehazeOutlinedIcon className="text-lg md:text-xl" />
        </button>
        
        <div className="text-xl font-bold flex  md:px-14 py-1 md:py-9">
          <Link href="/">
            <h1 className="text-4xl w-full text-center justify-center">
              KnowledgePath
            </h1>
          </Link>
        </div> */}

        {/* search-section */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearch} // Optional
              className="border text-black p-2 rounded h-16 w-96 text-xl"
            />
            {showCourseList && (
              <div className="absolute z-10 bg-white shadow-md w-full mt-2 max-h-40 overflow-y-auto rounded-md">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-2 text-black hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(course.title); // Set the clicked course as search input
                        setShowCourseList(false); // Hide the dropdown
                      }}
                    >
                      {course.title}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No courses found</div>
                )}
              </div>
            )}
          </div>
          <button className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700">
            <SearchOutlinedIcon className="text-2xl" />
          </button>
        </div> */}

        <div className="flex justify-center gap-4 md:gap-10 py-4 md:py-0">
          {/* <button
            className="py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            onClick={toggleLeftSidebar}
          >
            <DehazeOutlinedIcon className="text-xl" />
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

      {/* Right Sidebar */}
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

      {/* Left Sidebar className="relative top-4 left-0 h-auto w-2/6 -mt-6  md:w-1/6 bg-gradient-to-r from-cyan-500 to-blue-600
        shadow-2xl p-4 transform"   className=" top-4 absolute left-0 h-full -m-6 w-2/6 md:w-1/6 bg-gradient-to-r from-cyan-500 to-blue-600
 shadow-2xl p-4 transition-transform transform rounded-md" */}
      {showLeftSidebar && (
        <div
          className=" top-4 absolute left-0 h-full -m-6 w-2/6 md:w-1/6 bg-gradient-to-r from-cyan-500 to-blue-600
        shadow-2xl p-4 transition-transform transform rounded-md"
        >
          {/* <button
            className="absolute top-2 right-2 bg-red-600 hover:bg-gray-700 text-white hover:text-white"
            onClick={() => setShowLeftSidebar(false)}
          >
            <CloseOutlinedIcon className="size-11" />
          </button> */}

          <button
            className="absolute top-2 right-2 bg-slate-800 hover:bg-red-700 text-white hover:text-white font-semibold py-1 px-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowLeftSidebar(false)}
          >
            <CloseOutlinedIcon className="text-2xl" />
          </button>

          <div className="flex flex-col items-center justify-center mt-1 md:mt-2">
            {/* <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-400 rounded-full mb-4"></div>
            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-yellow-200">
              Profile
            </h2>
            <button className="py-4 px-4 w-3/4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 mb-2">
              View Profile
            </button> */}

            <div className="flex-col mt-12 md:mt-24 space-y-4">
              <div className="flex items-center">
                <HomeOutlinedIcon className="size-10 text-blue-600" />
                <Link href="/quick-options">
                  <h1 className="text-lg md:text-lg font-bold ml-2 text-gray-900">
                    QUICK-OPTIONS
                  </h1>
                </Link>
              </div>
              <div className="flex items-center">
                <SchoolOutlinedIcon className="size-10 text-blue-600" />
                <Link href="/ourCorses">
                  <h1 className="text-lg md:text-lg font-bold ml-2 text-gray-900">
                    COURSES
                  </h1>
                </Link>
              </div>
              <div className="flex items-center">
                <HelpOutlinedIcon className="size-10 text-blue-600" />
                <Link href="/about">
                  <h1 className="text-lg md:text-lg font-bold ml-2 text-gray-900">
                    ABOUT
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
