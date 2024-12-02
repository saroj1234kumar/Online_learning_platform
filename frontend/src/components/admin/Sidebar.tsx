import { useRouter } from "next/router";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCog,
  FaHome,
} from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  const navigateTo = (path: any) => {
    router.push(path);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen w-64 p-4 py-14 flex flex-col text-white">
      <ul className="space-y-4">
        {/* Students Navigation */}

        <li
          className="flex items-center gap-3 font-bold text-2xl cursor-pointer hover:text-red-950"
          onClick={() => navigateTo("/admindashboard")}
        >
          <FaHome /> Home
        </li>
        <li
          className="flex items-center gap-3 font-bold text-2xl cursor-pointer hover:text-red-500"
          onClick={() => navigateTo("/studentdetails")}
        >
          <FaUserGraduate /> Students
        </li>

        {/* Course Navigation */}
        <li
          className="flex items-center gap-3 font-bold text-2xl cursor-pointer hover:text-red-500"
          onClick={() => navigateTo("/allCourses")}
        >
          <FaChalkboardTeacher /> Course
        </li>

        {/* Settings Navigation */}
        <li
          className="flex items-center gap-3 font-bold text-2xl cursor-pointer hover:text-red-500"
          onClick={() => navigateTo("/settings")}
        >
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
}
