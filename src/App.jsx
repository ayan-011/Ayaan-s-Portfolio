import './App.css'
 import React, { useState, useEffect,useRef } from "react";


import Skills from './Skills';
import { Navbar } from './Navbar';
import { Status } from './Status'; 
import { Project } from './projects/Projects';
import Contact from './Contact';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

// GLowing Svg's
import VsGlow from './components/floatingicons/Vs';
import TsGlow from './components/floatingicons/Ts';
import JsGlow from './components/floatingicons/js';

//Loading
import Loader from './Loading'; 

//project Cards
import { GradientBackground } from './components/noisy-gradient-backgrounds';

 

function App() {

 


   const [loading, setLoading] = useState(true);

  // List all images and videos that need to be preloaded
  const assets = [
      "/map1.mp4",
       
      "/ayan.jpg", 
      "/thumbnails/ecommerce.png", 
      "/thumbnails/scriptgenerator.png", 
      "/thumbnails/sportech.png", 
    // "/images/car3.jpg",
    // "/carvideo.mp4",
  ];

  useEffect(() => {
    let loadedCount = 0;

    assets.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.onloadeddata = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
        video.onerror = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
      } else {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
        img.onerror = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
      }
    });
  }, []);

  if (loading) return <Loader/>; // Show loader until all assets are loaded


  return (
      
  <div className="relative min-h-screen"  >
    <div
        className="absolute inset-0 bg-[url('/noise.gif')] opacity-5 pointer-events-none  z-30"
      />
   
    <div className=" z-20 relative   bg-red-9  min-h-screen bg- flex flex-col justify-center items-center lg:px-4     overflow-x-hidden ">


        {/* NAVBAR  */}
           <Navbar/>
        {/* NAVBAR  */}


    <div className="blackEmpty lg:py-11 py-7 md:py-9 w-full relative z-10"></div>

{/* Glowing svg's */}
<>

    <div className=" absolute mt-90 -ml-300 opacity-50 hidden lg:flex ">
            <VsGlow/>
    </div>
      
    <span className="absolute -mt-100 lg:ml-288  opacity-50  hidden   lg:block">
            <TsGlow/>
    </span>
      
    <div className="  absolute -mt-130  -ml-50 opacity-50  hidden lg:flex">
            <JsGlow/>
    </div>
</>
{/* Glowing svg's */}

{/* Main  */}
      <div className=" w-full max-w-6xl grid sm:gap-3 gap-1 bg-red-90 p-3    
                       grid-cols-2 auto-rows-[120px]   /* Mobile */
                       sm:grid-cols-4                  /* Small */
                       md:grid-cols-4                  /* Tablet */
                       lg:grid-cols-6 lg:auto-rows-[140px] /* Desktop */ ">
      

        {/* Box 1 */}
        <div className="col-span-2 sm:col-span-2 border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] overflow-hidden overflow-y-scroll scrollbar-hide px-2 flex flex-col gap-1" >

          <div className="w-full px-2 py-0.5 border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 text-sm">About</div>

          <div className="w-full text-white leading-5 text-[14px] py-2 font-semibold">I’m a frontend developer who enjoys building websites with React. I like solving problems, designing clean layouts, and continuously learning to become better at what I do.</div>
        </div>



        {/* Box 2 */}
        <div className="border sm:col-span-1 border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] px-2  flex flex-col gap-2 overflow-y-scroll scrollbar-hide backdrop-opacity-100 " >
        <Status/>
        </div>

        {/* Box 3 Location  */}
       <div className="relative border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] overflow-hidden group 
       cursor-[url('https://cdn-icons-png.flaticon.com/24/684/684908.png'),_pointer]
       ">

  {/* Background Video */}
  <video
    src="/map1.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
  />

  {/* Dark overlay (optional but recommended) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Status bar */}
  <div className="relative z-10 w-full border-b border-[#525252] text-zinc-300 flex justify-between px-2 bg-[#1817174d] backdrop-blur-sm">
 
    <div className="text-sm py-0.5">Location</div>

    <div className="icon flex items-center justify-center">
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-red-500 opacity-60 animate-ping"></span>
        <span className="relative h-1 w-1 rounded-full bg-red-500"></span>
      </span>
    </div>

  </div>

  <div className="india bg-red-90 text-zinc-300 font-semibold p-3 relative">India</div>

       </div>


        {/* Box 4  skills */}
        <div className=" col-span-2 row-span-2 sm:order-6 sm:col-span-2 lg:order-4 border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] sm:overflow-y-scroll scrollbar-hide px-2 md:bg-none
        // mobile
        overflow-hidden
          relative
        " > 
        <div className="absolute bottom-0 left-0 w-full h-28
  bg-gradient-to-t from-[#131313] via-[#161616a8] to-transparent
  sm:hidden pointer-events-none">
</div>

{/* Mobile Button */}
  <Link to="/viewallskills">
<div className="absolute bottom-4 left-0 w-full flex justify-center sm:hidden z-20   ">
  <button className="px-3 py-1.5 text-xs border border-zinc-400   
    text-zinc-200 rounded-full flex items-center gap-1.5
    backdrop-blur-sm bg-black/40
       ">
    
    <span className="tracking-tight ">
      View More
    </span>

    <IoIosArrowForward className="text-sm" />
    
  </button>
  
</div>
  </Link>

        
           <  Skills/>
          </div>



        {/* Box 5 projects*/}
         
        <div className="col-span-2 row-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 row-span-2 lg:row-span-3 sm:order-4 border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e]  sm:overflow-y-scroll scrollbar-hide px-2 flex flex-col 
        // mobile
          relative 
          overflow-hidden
        " >

           <div className="absolute bottom-0 left-0 w-full h-28   z-25
   bg-gradient-to-t from-[#131313] via-[#161616a8] to-transparent
  sm:hidden pointer-events-none">
</div>

{/* Mobile Button */}
  <Link to="/allprojects">
<div className="absolute bottom-4 left-0 w-full flex justify-center sm:hidden z-30  ">
  <button className="px-3 py-1.5 text-xs border border-zinc-400 
    text-zinc-200 rounded-full flex items-center gap-1.5
    backdrop-blur-sm bg-black/40
       ">
    
  <button className="tracking-tight">
    View More
  </button>

    <IoIosArrowForward className="text-sm" />
    
  </button>
</div>
</Link>
         
         <Project/>         

        </div>
             
        {/* Box 6 */}
        <div className="
          col-span-2 
          row-span-2
          sm:order-6
          sm:col-span-2
          border border-[#525252] 
          rounded-lg lg:rounded-xl 
          bg-[#1e1e1e]
          overflow-y-scroll scrollbar-hide
          px-2
         
        " >
          
          <Contact/>
          
          </div>

      </div>

    </div> 

    </div>

    
    
    
  )
}

export default App
