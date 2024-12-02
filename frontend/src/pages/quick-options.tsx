import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
// import Login from "@/components/login/Login";
import Breadcrum from "@/components/home/Breadcrumb";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Breadcrum />
  );
}
