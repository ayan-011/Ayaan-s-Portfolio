// Allprojects

import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Atomix UI",
    date: "Oct 2024 – Nov 2024",
    description:
      "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Weblytics",
    date: "Feb 2025 – Mar 2025",
    description:
      "Unlock powerful insights with ease. Track visitor behavior, monitor key metrics, and optimize performance effortlessly.",
    tags: ["Next.js", "TypeScript", "Analytics", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
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
        <Link to="/">
        <button className="text-lg text-zinc-400 hover:text-white transition mb-6">
          ← Go back
        </button>
        </Link>

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
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-1">
                  {project.title}
                </h2>
                <p className="text-xs text-zinc-500 mb-4">
                  {project.date}
                </p>

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
