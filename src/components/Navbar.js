'use client'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import Searchbar from "./SearchBar";
import React, { useEffect, useState } from 'react'
import DateTime from "./DateTime";
import { useDateTime } from "@/hooks/useDateTime";
import { Flag } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/router";
import Newsearchbar from "./NewSearch.js";
import Searchtheinternet from "./Searchtheinternet.js"

const Navbar = () => {

  const {
    englishDate,        // "Monday, January 15, 2024"
    englishTime,        // "10:30:45 AM"
    englishDateTime,    // "Monday, January 15, 2024, 10:30:45 AM"
    nepaliDate,        // "सोमवार, १५ जनवरी, २०२४"
    nepaliTime,        // "१०:३०:४५ अपराह्न"
    nepaliDateTime,     // Full Nepali date and time
    bsDate,            // "२०८० पौष २"
    bsYear,            // "२०८०"
    bsMonth,           // "पौष"
    bsDay,             // "२"
    rawDate            // JavaScript Date object
  } = useDateTime();

    
   const [searchtogoogle,setsearchtogoogle]=useState('') 
  
   const handlechange=(event)=>{
    setsearchtogoogle(event.target.value)
    console.log(event.target.value)
   }
   const handlesearch=(event)=>{
    event.preventDefault()
   
  
    
    // window.location.href=`https://www.google.com/search?q=${searchtogoogle}`
        // window.location.href=`https://www.facebook.com/=${searchtogoogle}`
            window.open(`https://www.google.com/search?q=${searchtogoogle}`)


   }

  return (
    <div className="flex flex-col items-center ">
        <div className="flex justify-between bg-blue-900
 w-screen items-center px-20 h-20 sticky top-0">
            <div className="">
       <Image
  src="https://flagcdn.com/np.svg"
  width={30}
  height={40}
  alt="Nepal"/>
      </div>
            <div className="flex gap-4 text-2xl">
        
      
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      
    
            </div>
           
              <div className="flex gap-4">
            <Link href='https://www.facebook.com/'><FaFacebook  className="text-2xl text-blue-600"/></Link>
            <Link href='https://www.youtube.com/@digitalmediacenterphidim6022'> <FaYoutube className="text-2xl text-red-500" /></Link>
            <Link href='https://www.linkedin.com/feed/'><FaLinkedin className="text-2xl text-blue-400" /></Link>
            </div>
             <div className="text-2xl">
              <Link href='/login'>Login</Link>
            </div>
          <div className="text-[20px]">
            {/* <DateTime/> */}
            {bsDate}
          </div>
        </div>
        <div className="flex justify-between px-20 w-screen items-center bg-slate-100 text-black">
      <div>
              <Image src='https://tse3.mm.bing.net/th/id/OIP.q6hexFxcdJnqy_OJPTRLTgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'width={70} height={70} alt='Tiger gang' className="rounded-full"
              ></Image>
            </div>
      <div className="flex">

 <Searchtheinternet value={searchtogoogle} onChange={handlechange}/>
  {/* <Button onClick={handlesearch} /> */}
  <button type='submit' onClick={handlesearch} className="border-2 border-black p-2 rounded-full w-40 bg-slate-950 text-blue-600">
    Search
  </button>

</div>
      <div>
        <Link href='/calculator' className="text-2xl">Calculator</Link>
      </div>
    </div>
    
    
    
    </div>
  )
}

export default Navbar
