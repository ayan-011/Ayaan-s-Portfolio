import { IoLogoJavascript } from "react-icons/io5"; 
import { SiExpress, SiMongodb, SiPostman, SiTypescript } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { FaNodeJs, FaReact } from "react-icons/fa";

function Skills(){


    return (
          <>
              <div className="w-full px-2 py-0.5 border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 text-sm flex flex-row justify-between">
            <div className="text">Skills</div>
            <div className="vscode logo flex items-center text-zinc-500 "><VscVscode /></div>
          </div>

          <div className="parent bg-red-90 w-full h-fit flex flex-col gap-2 p-4 bg-red-" > 
            
            {/* language */}
            <div className="border-[1px] border-[#525252] rounded  flex flex-col  items-center ">
              <div className="top bg-red- w-full text-sm p-[2px] px-2 text-zinc-500 border-b-[1px] border-[#525252]">Languages</div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-yellow-500"><IoLogoJavascript /></div>
              <div className="text">Javascript</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px]  text-blue-500"><SiTypescript  /></div>
              <div className="text">Typescript</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex  ml-1 ">C</div>
              <div className="text"></div>
              </div>
            </div>
             
             {/* MERN  */}
            <div className="border-[1px] border-[#525252] rounded  flex flex-col  items-center ">
              <div className="top bg-red- w-full text-sm p-[2px] px-2 text-zinc-500 border-b-[1px] border-[#525252]">Stacks</div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-green-500"><SiMongodb /></div>
              <div className="text">MongoDB</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] "><SiExpress /></div>
              <div className="text">Express</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-blue-300"><FaReact  /></div>
              <div className="text">React</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-green-500"><FaNodeJs  /></div>
              <div className="text">NodeJS</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] "><RiNextjsFill    /></div>
              <div className="text">NextJS</div>
              </div>
            </div>

            {/* styles */}
            <div className="border-[1px] border-[#525252] rounded  flex flex-col  items-center ">
              <div className="top bg-red- w-full text-sm p-[2px] px-2 text-zinc-500 border-b-[1px] border-[#525252]">Other tools & styles</div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-blue-300 "><RiTailwindCssFill  /></div>
              <div className="text">TailwindCSS</div>
              </div>
              <div className="flex flex-row items-center p-[2px] px-2 gap-2 w-full text-zinc-300">
              <div className="icon flex mt-[2px] text-orange-500/70 "><SiPostman   /></div>
              <div className="text">Postman</div>
              </div>
              
            </div>

          </div>
          </>
    )
}

export default Skills;