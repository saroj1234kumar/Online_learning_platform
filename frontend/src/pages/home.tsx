import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
// import Login from "@/components/login/Login";
// import { DarkModeProvider } from "@/context/Darkmodecontext";
import OurCrouses from "@/components/home/OurCourses";
import About from "./about";

const inter = Inter({ subsets: ["latin"] });

export default function home() {
  return (
    // <DarkModeProvider>
    <Mainlayout>
      <Breadcrumb />
      <OurCrouses />
      <About />
    </Mainlayout>
    // </DarkModeProvider>
  );
}
