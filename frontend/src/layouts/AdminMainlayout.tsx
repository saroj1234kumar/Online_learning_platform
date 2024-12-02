import React from 'react'
import { ReactElement, useState } from "react";
import Header from './Header'
import AdminHeader from './AdminHeader';
// import Footer from './Footer'
// import ResponsiveNaveBar from './ResponsiveNavBar';
// import Sidebar from '@/components/getintouch/Sidebar';


type Prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  
  };
export default function AdminMainlayout( { children, title = "E-learning" }: Prop) {
  const [open, setOpen]=useState<boolean>(false)
  return (
    <>
      
        <AdminHeader setOpen={setOpen} open={open}/>
       {/* <ResponsiveNaveBar />
       <Sidebar open={open} /> */}
        <>{children}</>
        {/* <Companylogo/> */}
        {/* <Footer/> */}
        
       
    </>
  )
}
