// Allprojects

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const projects = [
   {
      id: 1,
      title: "Script Generator",
      tags: ["Next.js", "Typescript","React", "Tailwind CSS", ],
      description: "Script Generator application that helps users quickly create structured and engaging scripts for various purposes. The project focuses on simplicity and efficiency, allowing users to generate content with minimal input while maintaining quality output.",
      image: "/thumbnails/scriptgenerator.png",
      live: "https://v0-you-tube-shorts-script-rosy.vercel.app/",
      github: "https://github.com/ayan-011/script_generator"
    },
    {
      id: 2,
      title: "Ecommerce Project",
       tags: ["Next.js", "Typescript","React", "Tailwind CSS", ],
      description: "A responsive e-commerce web application with product listings, cart management, and a streamlined checkout flow. Built with a focus on performance, clean UI, and intuitive user experience.",
      image: "/thumbnails/ecommerce.png",
      live: "https://online-store-one-pi.vercel.app/",
      github: "https://github.com/ayan-011/online-store"
    },
    {
      id: 3,
      title: "Sportech",
       tags: ["Next.js", "Typescript","React", "Tailwind CSS", ],
      description: "Sportech is a sleek showcase website for a modern garage, highlighting its work, services, and features. Get a glimpse of the team's expertise, past projects, and what makes Sportech the go-to garage for car enthusiasts.",
      image: "/thumbnails/sportech.png",
      live: "https://sportech-w5nx.vercel.app/",
      github: "https://github.com/ayan-011/sportech"
    },
];

export default function Allprojects() {
  return (
    // flex sm:hidden
    <div className="min-h-screen bg-black text-white px-6 py-16">   
      {/* Container */}
      {/* max-w-[51vw] */}
      <div className=" lg:max-w-[51vw] max-w-full mx-auto">
        
        {/* Go Back */}
        <div className="w-full flex">

        <a href="/" >
        <button className="text-lg text-zinc-400   hover:text-white transition mb-6 flex  cursor-pointer">
          <p className=" items-center ">←</p> Go back
        </button>
        </a>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          My Projects
        </h1>

        <p className="text-zinc-400  mb-12 mt-10 leading-relaxed text-xl">
          A collection of innovative web applications and digital solutions I've built. From UI component libraries to analytics platforms, each project showcases my commitment to clean code, modern design, and user-centered development. I focus on creating scalable, performant applications using cutting-edge technologies.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl "
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover overflow-hidden hover:scale-[1.02] transition duration-300"
                />
              </div>

              {/* Link  */}
              <div className="links  w-full justify-end flex">

                <div className="logos flex gap-2 p-2">
                    <a  className="hover:text-zinc-400 " target="_blank" rel="noopener noreferrer"   href={project.github} ><FaGithub /></a>
                    
                    <a className="hover:text-zinc-400" target="_blank" rel="noopener noreferrer"  href={project.live} ><FiLink /></a>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-1">
                  {project.title}
                </h2>
                {/* <p className="text-xs text-zinc-500 mb-4">
                  {project.date}
                </p> */}

                <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-zinc-800 rounded-md border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
