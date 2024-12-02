import Sidebar from "../admin/Sidebar";
import Card from "../admin/Card";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaDollarSign,
} from "react-icons/fa";
import router from "next/router";

const moveToCourseForm = () => {
  console.log("User logged out");

  // Redirect to the home screen
  router.push("/courseDetails");
};

export default function MainAdminDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 px-20">
        {/* Header */}
        <div className=" items-center mb-6 p-17">
          <div className="info bg-slate-200 text-slate-700 text-xl p-6 m-2 ">
            <div className="info_heading text-2xl font-bold text-slate-900  mr-6 ">
              <h1>Information</h1>
            </div>

            <p>
              Welcome to the KnowledgePath! Here, admins can seamlessly add new
              courses to enhance the learning opportunities on the platform.
              While creating a course, you can provide detailed information,
              including the course title, description, objectives, and learning
              outcomes. Enrich the course by specifying the duration, skill
              level (e.g., Beginner, Intermediate, Advanced), and target
              audience. Additionally, you can upload course thumbnails, add a
              detailed syllabus, and define prerequisites to guide learners
              effectively. This section also allows you to categorize courses
              into relevant topics or industries, making them easier to discover
              for students. With these tools, you can ensure the platform offers
              a diverse, organized, and impactful library of courses for all
              learners.
            </p>
          </div>
          <div className="p-2 m-2">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              onClick={moveToCourseForm}
            >
              Add New Course
            </button>
            {/* <div className="bg-white p-2 rounded-lg shadow-md cursor-pointer">🔔</div>
            <div className="bg-white p-2 rounded-lg shadow-md cursor-pointer">👤</div> */}
          </div>
        </div>

        {/* Cards */}
        <div className="sudentAntCouseDetails">
          <div className="title text-blue-800 pl-5 font-bold ">
            <h2>
              All the information about the student and the courses.......
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-20 mb-6  p-5 font-bold text-lg">
            <div className="studentNumber ">
              <p className="title text-slate-800">Total student Enrolled:</p>
              <Card title="Students" value="2194" icon={<FaUserGraduate />} />
            </div>
            <div className="courseNumber ">
              <p className="title text-slate-800">Total courses added :</p>
              <Card title="Courses" value="53" icon={<FaChalkboardTeacher />} />
            </div>
          </div>

          {/* <Card title="Schools" value="5" icon={<FaSchool />} />
          <Card title="Income" value="$350,000" icon={<FaDollarSign />} /> */}
        </div>

        {/* Tables */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Payments */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Recent Payments</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>School</th>
                  <th>Amount</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="border-t">
                    <td>John Doe</td>
                    <td>St. James College</td>
                    <td>$120</td>
                    <td>
                      <button className="text-red-500">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          {/* New Students */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">New Students</h3>
            <ul>
              {Array.from({ length: 5 }).map((_, idx) => (
                <li key={idx} className="flex items-center gap-3 border-t py-2">
                  <div className="bg-red-300 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <div>John Steve Doe</div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
