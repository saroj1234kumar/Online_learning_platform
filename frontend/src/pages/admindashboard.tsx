import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
// import Login from "@/components/login/Login";
// import { DarkModeProvider } from "@/context/Darkmodecontext";
import OurCrouses from "@/components/home/OurCourses";
import MainAdminDashboard from "@/components/admin/MainAdminDashboard";
import AdminMainlayout from "@/layouts/AdminMainlayout";


const inter = Inter({ subsets: ["latin"] });

export default function admindashboard() {
  return (
    // <DarkModeProvider>
  <AdminMainlayout>
    <MainAdminDashboard/>
  </AdminMainlayout>
  // </DarkModeProvider>
  );
}
