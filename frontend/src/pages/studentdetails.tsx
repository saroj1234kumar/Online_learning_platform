import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
import Login from "@/components/login/Login";
import OurCrouses from "@/components/home/OurCourses";
import MainAdminDashboard from "@/components/admin/MainAdminDashboard";
import AdminMainlayout from "@/layouts/AdminMainlayout";
import CourseDetailsForm from "@/components/admin/CourseDetails";
import StudentDetails from "@/components/admin/StudentDetails";

const inter = Inter({ subsets: ["latin"] });

export default function studentdetails() {
  return (
    <AdminMainlayout>
      <StudentDetails />
    </AdminMainlayout>
  );
}
