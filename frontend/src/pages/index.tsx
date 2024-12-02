import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";
import Breadcrumb from "@/components/home/Breadcrumb";
import Login from "@/components/login/Home";
import { ThemeProvider } from "@/context/Darkmodecontext";
import About from "@/components/home/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Component, pageProps }: any) {
  return (
    <>
      <Login />
      <About />
    </>
  );
}
