import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
        <div className="w-full px-2 py-0.5 text-sm border-b-[1px] border-[#525252] bg-red-90 text-zinc-300">Contact</div>

        <div className="bg-red-90 w-full h-full flex flex-col py-5 gap-3">

            <div className="address flex flex-col">
                <h1 className='text-white text-sm ml-2'>Address</h1>
                <input className='bg-zinc-950 text-zinc-200 p-2 rounded-lg text-sm outline-none border-[1px] border-[#525252]' type="text" placeholder='eg:- Instagram / Email /...' />
            </div>
            <div className="address flex flex-col">
                <h1 className='text-white text-sm ml-2'>Comment</h1>
                <textarea className='bg-zinc-950 text-zinc-200 p-2 py-5 rounded-lg text-sm outline-none border-[1px] border-[#525252]' type="text" placeholder='...' >
                 </textarea>
            </div> 
            <div className="address flex justify-center w-full">
                 <button className='bg-[#000000] p-2 w-1/2  rounded-md text-white hover:bg-zinc-200 hover:text-black transition-all duration-300 cursor-pointer font-semibold' >Submit</button>
            </div> 


            {/* Ions  */}
            <div className="address flex flex-row gap-2 w-full bg-red-90 border-t-[1px] border-[#525252] p-2 text-lg text-zinc-500">
                 
                 <a target="_blank" rel="noopener noreferrer" href="">
                    <FaInstagram className='cursor-pointer hover:text-zinc-400'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="">
                    <MdEmail className='cursor-pointer hover:text-zinc-400'/> 
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="">
                    <FaLinkedin className='cursor-pointer hover:text-zinc-400'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="">
                    <FaSquareXTwitter className='cursor-pointer hover:text-zinc-400'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="">
                    <FaGithub className='cursor-pointer hover:text-zinc-400'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="/">
                    <FaWhatsapp  className='cursor-pointer hover:text-zinc-400'/>
                 </a>
                  
                  

            </div> 

        </div>
     </>
     )
}

export default Contact