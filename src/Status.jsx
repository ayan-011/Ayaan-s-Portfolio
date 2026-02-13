import { CiFileOn } from 'react-icons/ci';
import { FaFolder } from 'react-icons/fa';

export function Status(){
     return(
        <>
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
        </>
     )

}