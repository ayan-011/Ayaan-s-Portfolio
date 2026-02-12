import './App.css'
import { MdEmail } from "react-icons/md";
import { FaFolder, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiFileOn } from 'react-icons/ci'; 

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center lg:px-4 ">


{/* NAVBAR  */}
<div className="NAVBAR backdrop-blur-lg w-full  top-0   fixed flex justify-center z-99">
   
    <div className=" flex flex-row justify-between bg-blue-90 max-w-6xl  w-full  border-b-[1px] border-[#525252] lg:px-3 px-3 lg:py-2 p-1 lg:p-0 bg-red-  ">

      <div className="IntroWithProfile flex flex-row bg-red-90 w-fit px-1 py-1 items-center  justify-center lg:gap-3 gap-2  bg-red-90 ">
        <div className="profilepicture lg:w-10 lg:h-10 w-9 h-9 bg-white rounded-full border-[1px]  border-[#525252] flex items-center justify-center overflow-hidden">
          <img className='mt-2 pointer-events-none select-none' src="/ayan.jpg" alt="" />
        </div>
      <div className="Intro  flex flex-col gap-0 tracking-tight md:leading-5 leading-4 select-none">
        <div className="name text-white lg:text-[17px] text-sm">Ayaan Saifi</div>
        <div className="work text-zinc-400 md:text-sm text-[11px]">Software Developer</div>
      </div>

      </div>
      <div className="icons flex flex-row items-center justify-center bg-red- text-[#525252]  text-xl px-2 lg:gap-2 gap-1">
          <MdEmail className='cursor-pointer hover:text-zinc-500'/>
          <FaLinkedin className='cursor-pointer hover:text-zinc-500'/>
          <FaInstagram className='cursor-pointer hover:text-zinc-500'/>
          
           
      </div>
    </div>
</div>
{/* NAVBAR  */}


    <div className="blackEmpty lg:py-11 py-7   md:py-9 w-full bg-red-    relative z-10"></div>
      
      <div className="
       
        w-full 
        max-w-6xl 
        grid 
        sm:gap-3 
        gap-1
        bg-red-90 
        p-3

        grid-cols-2 auto-rows-[120px]   /* Mobile */
        sm:grid-cols-4                  /* Small */
        md:grid-cols-4                  /* Tablet */
        lg:grid-cols-6 lg:auto-rows-[140px] /* Desktop */

     
      ">

        {/* Box 1 */}
        <div className="col-span-2 sm:col-span-2 border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] overflow-hidden overflow-y-scroll scrollbar-hide px-2 flex flex-col gap-1" >

          <div className="w-full px-2 py-0.5 border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 text-sm">About</div>

          <div className="w-full text-white leading-5 text-[14px] py-2 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, mollitia quo? Quidem eum in esse cumque. Recusandae et quia cumque, nisi vero neque voluptatibus deserunt. Labore debitis illo deleniti nostrum?</div>
        </div>



        {/* Box 2 */}
        <div className="border sm:col-span-1 border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] px-2  flex flex-col gap-2 overflow-y-scroll scrollbar-hide" >

          <div className="status w-full  border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 flex flex-row justify-between px-2 py-0.5">
            <div className="text-sm">Status</div>
            <div className="icon"></div>
          </div>
          <div className="available_for flex flex-row bg-red-90 items-center gap-2">
            <div className="folder_icon text-zinc-400 text- bg-whit h-fit w-fit   "><FaFolder /></div>
            <p className='folder_icon text-zinc-200  text-sm bg-blue-90  '>available_for</p>
          </div>
          
          <div className="files flex flex-col px-3 leading-5 mb-2 ">
            <div className="flex items-center gap-2 flex-row ">
              <div className="icon text-zinc-100"> <CiFileOn />  </div>
              <div className="text-sm text-zinc-400 hover:text-zinc-300 select-none underline">freelance</div>
            </div>
            <div className="flex items-center gap-2 flex-row ">
              <div className="icon text-zinc-100"> <CiFileOn />  </div>
              <div className="text-sm text-zinc-400 hover:text-zinc-300 select-none underline">contact</div>
            </div>
            <div className="flex items-center gap-2 flex-row ">
              <div className="icon text-zinc-100"> <CiFileOn />  </div>
              <div className="text-sm text-zinc-400 hover:text-zinc-300 select-none underline">full-time</div>
            </div>
          </div>

           </div>

        {/* Box 3 */}
       <div className="relative border border-[#525252] rounded-lg lg:rounded-xl bg-[#1e1e1e] overflow-hidden group">

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

</div>


        {/* Box 4 */}
        <div className="
          col-span-2 
          row-span-2
          sm:order-6
          sm:col-span-2
          lg:order-4
          border border-[#525252] 
          rounded-lg lg:rounded-xl 
          bg-[#1e1e1e]
          overflow-y-scroll scrollbar-hide
        " >
          <div className="w-full px-2 py-0.5 border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 text-sm">About me</div>
          </div>

        {/* Box 5 */}
        <div className="
          col-span-2 
          sm:col-span-4 
          md:col-span-4 
          lg:col-span-4 
          row-span-2 
          lg:row-span-3
          sm:order-4
          border border-[#525252] 
          rounded-lg lg:rounded-xl 
          bg-[#1e1e1e]
          overflow-y-scroll scrollbar-hide
        " >
          <div className="w-full px-2 py-0.5 text-sm border-b-[1px] border-[#525252] bg-red-90 text-zinc-300">About me</div>
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
        " >
          <div className="w-full px-2 py-0.5 text-sm border-b-[1px] border-[#525252] bg-red-90 text-zinc-300">About me</div>
          
          </div>

      </div>

    </div>
  )
}

export default App
