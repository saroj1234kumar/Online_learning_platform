import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
// import Login from "@/components/login/Login";
import Registration from "@/components/login/Registration";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <Registration/>
  );
}
