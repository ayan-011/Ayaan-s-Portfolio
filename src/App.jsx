import './App.css'


import Skills from './Skills';
import { Navbar } from './Navbar';
import { Status } from './Status'; 
import { Project } from './projects/Projects';
import Contact from './Contact';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
  

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center lg:px-4 ">


        {/* NAVBAR  */}
           <Navbar/>
        {/* NAVBAR  */}


    <div className="blackEmpty lg:py-11 py-7 md:py-9 w-full relative z-10 "></div>
      
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
        <div className="border sm:col-span-1 border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] px-2  flex flex-col gap-2 overflow-y-scroll scrollbar-hide" >
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


        {/* Box 4 */}
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
<div className="absolute bottom-4 left-0 w-full flex justify-center sm:hidden z-20  ">
  <Link to="/viewallskills">
  <button className="px-3 py-1.5 text-xs border border-zinc-400 
    text-zinc-200 rounded-full flex items-center gap-1.5
    backdrop-blur-sm bg-black/40
       ">
    
    <span className="tracking-tight ">
      View More
    </span>

    <IoIosArrowForward className="text-sm" />
    
  </button>
  
  </Link>
</div>

        
           <  Skills/>
          </div>



        {/* Box 5 */}
        <div className="col-span-2 row-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 row-span-2 lg:row-span-3 sm:order-4 border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] sm:overflow-y-scroll scrollbar-hide px-2 flex flex-col 
        // mobile
          relative 
          overflow-hidden
        " >

           <div className="absolute bottom-0 left-0 w-full h-52
  bg-gradient-to-t from-[#000000ee] via-[#202020cc] to-transparent
  sm:hidden pointer-events-none">
</div>

{/* Mobile Button */}
<div className="absolute bottom-4 left-0 w-full flex justify-center sm:hidden z-20  ">
  <button className="px-3 py-1.5 text-xs border border-zinc-400 
    text-zinc-200 rounded-full flex items-center gap-1.5
    backdrop-blur-sm bg-black/40
       ">
    
    <Link to="/allprojects">
  <button className="tracking-tight">
    View More
  </button>
</Link>

    <IoIosArrowForward className="text-sm" />
    
  </button>
</div>
         
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
  )
}

export default App
