import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

function Card({ title, description, image, live, github }) {
  return (
   <div className="bg-[#1a1919c2]  rounded-lg overflow-hidden flex flex-col border-[1px] border-[#353535] hover:border-[#424242] hover:transition-all duration-300 shadow-2xl shadow-zinc-950">
  
 <div className="h-fit w-full overflow-hidden bg-white">
    <img
      src={image}
      alt={title}
      className="w-100% h-100%  cursor-pointer transition-transform duration-700 ease-out hover:scale-110 "
    />
  </div>

  <div className="p-2 py-4 bg-red-90">
    <div className="title flex flex-row justify-between border-b-[1px] border-b-zinc-700 py-1" >
    <div className="text-md text-zinc-200 font-semibold">{title}</div>
        <div className="icons flex flex-row gap-3 text-zinc-200 ">
                 <a  className="hover:text-zinc-400" target="_blank" rel="noopener noreferrer"   href={live} ><FaGithub /></a>

                 <a className="hover:text-zinc-400" target="_blank" rel="noopener noreferrer"  href={live} ><FiLink /></a>
               
            
        </div>
    </div>
    <p className="text-sm text-zinc-300 mt-4">{description}</p>
  </div>

</div>

  );
}

// const styles = {
//   card: {
//     width: "250px",
//     padding: "15px",
//     borderRadius: "10px",
//     backgroundColor: "#1e1e1e",
//     color: "white",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "8px",
//   },
// };

export default Card;
