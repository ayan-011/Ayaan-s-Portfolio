import { cn } from "@/lib/utils";
import { NoiseBackground } from "@/components/ui/noise-background";

import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export function NoiseBackgroundDemoSecond({ title, description, image, live, github }) {
  return (
    <div className="mx-auto max-w-sm p-1 ">
      <NoiseBackground
         gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}>
        <Card className="">
          <img
            src={image}
               alt={title}
            className="h-50 w-full rounded-lg object-cover cursor-pointer  hover:opacity-95 transition-transform duration-700 ease-out hover:scale-110" />
          <div className="px-3 py-2">
            <div className="title flex flex-row justify-between border-b-[1px] border-b-zinc-700 py-1" >
    <div className="text-md text-zinc-200 font-semibold">{title}</div>
        <div className="icons flex flex-row gap-3 text-zinc-200   items-center">
                 <a  className="hover:text-zinc-400" target="_blank" rel="noopener noreferrer"   href={github} ><FaGithub /></a>

                 <a className="hover:text-zinc-400" target="_blank" rel="noopener noreferrer"  href={live} ><FiLink /></a>
               
            
        </div>
    </div>
            <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </Card>
      </NoiseBackground>
    </div>
  );
}

const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-80 flex-col overflow-hidden rounded-lg bg-white text-center dark:bg-neutral-800",
        className
      )}>
      {children}
    </div>
  );
};
