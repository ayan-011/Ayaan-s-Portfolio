import './App.css'
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center lg:px-4 ">

    <div className="NAVBAR flex flex-row justify-between bg-blue-90 max-w-6xl  w-full  border-b-[1px] border-[#525252] lg:px-3 px-3 lg:py-2 p-1 lg:p-0 bg-red- backdrop-blur-lg top-0   fixed ">

      <div className="IntroWithProfile flex flex-row bg-red-90 w-fit px-1 py-1 items-center  justify-center lg:gap-3 gap-2  bg-red-90 ">
        <div className="profilepicture lg:w-10 lg:h-10 w-9 h-9 bg-white rounded-full border-[1px]  border-[#525252] flex items-center justify-center overflow-hidden">
          <img className='mt-2' src="/ayan.jpg" alt="" />
        </div>
      <div className="Intro  flex flex-col gap-0 tracking-tight md:leading-5 leading-4">
        <div className="name text-white text-sm">Ayan Saifi</div>
        <div className="work text-zinc-400 md:text-sm text-[11px]">Software Developer</div>
      </div>

      </div>
      <div className="icons flex flex-row items-center justify-center bg-red- text-[#525252] lg:text-xl px-2 lg:gap-2 gap-1">
          <MdEmail className='cursor-pointer hover:text-zinc-500'/>
          <FaLinkedin className='cursor-pointer hover:text-zinc-500'/>
          <FaInstagram className='cursor-pointer hover:text-zinc-500'/>
          
           
      </div>
    </div>

    <div className="blackEmpty lg:py-11 py-6   md:py-7 w-full bg-red-"></div>
      
      <div className="
       
        w-full 
        max-w-6xl 
        grid 
        gap-3 
        bg-red-90 
        p-3

        grid-cols-2 auto-rows-[120px]   /* Mobile */
        sm:grid-cols-4                  /* Small */
        md:grid-cols-4                  /* Tablet */
        lg:grid-cols-6 lg:auto-rows-[140px] /* Desktop */
      ">

        {/* Box 1 */}
        <div className="col-span-2 sm:col-span-2 border border-[#525252] rounded-lg lg:rounded-2xl bg-[#1e1e1e]" />

        {/* Box 2 */}
        <div className="border sm:col-span-1 border-[#525252] rounded-lg lg:rounded-2xl bg-[#1e1e1e]" />

        {/* Box 3 */}
        <div className="border border-[#525252] rounded-lg lg:rounded-2xl bg-[#1e1e1e]" />

        {/* Box 4 */}
        <div className="
          col-span-2 
          row-span-2
          sm:order-6
          sm:col-span-2
          lg:order-4
          border border-[#525252] 
          rounded-lg lg:rounded-2xl 
          bg-[#1e1e1e]
        " />

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
          rounded-lg lg:rounded-2xl 
          bg-[#1e1e1e]
        " />

        {/* Box 6 */}
        <div className="
          col-span-2 
          row-span-2
          sm:order-6
          sm:col-span-2
          border border-[#525252] 
          rounded-lg lg:rounded-2xl 
          bg-[#1e1e1e]
        " />

      </div>

    </div>
  )
}

export default App
