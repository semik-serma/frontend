import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' flex bg-slate-950 p-10 text-2xl justify-around'>
        <div>
        <div className='flex gap-20'>
            <h1>Contact us on facebook,youtube and linkedin</h1>
            <div className='flex gap-5'>
            <Link href='https://www.facebook.com/'><FaFacebook  className="text-2xl text-blue-600"/></Link>
            <Link href='https://www.youtube.com/@digitalmediacenterphidim6022'> <FaYoutube className="text-2xl text-red-500" /></Link>
            <Link href='https://www.linkedin.com/feed/'><FaLinkedin className="text-2xl text-blue-400" /></Link>
            </div>
        </div>
        <div className='flex flex-col'>
            <div>Year:2025</div>
            <div>About:portfolio</div>
           <div> Developer:Semikhang</div>
        </div>
      </div>
      <div>
        <div>Father:Dhanraj Sherma</div>
        <div>Mother:Eljeena Lawti</div>
        <div>Brother:Tangsang Sherma</div>
        <div>@Dev:Semik Serma</div>
      </div>

    </div>
  )
}

export default Footer
