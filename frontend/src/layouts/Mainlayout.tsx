import React from 'react'
import { ReactElement, useState } from "react";
import Header from './Header'
// import Footer from './Footer'
// import ResponsiveNaveBar from './ResponsiveNavBar';
// import Sidebar from '@/components/getintouch/Sidebar';


type Prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  
  };
export default function Mainlayout( { children, title = "E-learning" }: Prop) {
  const [open, setOpen]=useState<boolean>(false)
  return (
    <>
      
        <Header setOpen={setOpen} open={open}/>
       {/* <ResponsiveNaveBar />
       <Sidebar open={open} /> */}
        <>{children}</>
        {/* <Companylogo/> */}
        {/* <Footer/> */}
        
       
    </>
  )
}
