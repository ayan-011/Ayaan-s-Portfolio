

import React from "react";
import { Link } from "react-router-dom";

const skillsData  = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Full Stack",
    skills: ["MERN Stack", "CRUD Apps", "Authentication Systems", "Deployment"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Vercel"],
  },
];

export default function Viewallskills() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

       <Link to="/">
        <button className="text-lg text-zinc-400 hover:text-white transition mb-6 flex">
            <p className="flex items-center">←</p>  Go back
        </button>
        </Link>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          My Skills
        </h1>

        <p className="text-zinc-400 max-w-2xl text-xl mb-12 mt-9 leading-relaxed">
          Here are the technologies and tools I’ve worked with while building
          modern, scalable web applications.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((section, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:scale-[1.02] transition duration-300"
            >
              <h2 className="text-lg font-semibold mb-5">
                {section.category}
              </h2>

              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700 hover:bg-zinc-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
