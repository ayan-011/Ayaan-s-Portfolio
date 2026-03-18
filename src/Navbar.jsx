import { MdEmail } from "react-icons/md";
import {  FaInstagram, FaLinkedin} from "react-icons/fa";

export function Navbar(){

    return(
        <>
        <div className="NAVBAR backdrop-blur-lg w-full  top-0   fixed flex justify-center z-99">
   
    <div className=" flex flex-row justify-between bg-blue-90 max-w-6xl  w-full  border-b-[1px] border-[#525252] lg:px-3 px-1 lg:py-2 p-1 lg:p-0 bg-red-  ">

      <div className="IntroWithProfile flex flex-row bg-red-90 w-fit px-1 py-1 items-center  justify-center lg:gap-3 gap-2  bg-red-90 ">
        <div className="profilepicture lg:w-10 lg:h-10 w-9 h-9 bg-white rounded-full border-[1px]  border-[#525252] flex items-center justify-center overflow-hidden">
          <img className='mt-2 pointer-events-none select-none' src="/ayan.jpg" alt="" />
        </div>
      <div className="Intro  flex flex-col gap-0 tracking-tight md:leading-5 leading-4 select-none">
        <div className="name text-white lg:text-[17px] text-sm">Ayaan Saifi</div>
        <div className="work text-zinc-400 md:text-sm text-[11px]">Software Developer | Designer</div>
      </div>

      </div>
      <div className="icons flex flex-row items-center justify-center bg-red- text-[#525252]  sm:text-xl  text-md px-2 lg:gap-2 gap-1">
        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXLFVCCSxWhLxssDthdgHtzLJHrjBdhLLZTgLJPZbGcZWxzprJxSBfSDnvzTzvccVrZlV">
          <MdEmail className='cursor-pointer hover:text-zinc-500'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ayaan-saifi-782505319/">
          <FaLinkedin className='cursor-pointer hover:text-zinc-500'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ayaan_saifi__1/">
          <FaInstagram className='cursor-pointer hover:text-zinc-500'/>
        </a>
           
      </div>
    </div>
</div>
        </>
    )
}