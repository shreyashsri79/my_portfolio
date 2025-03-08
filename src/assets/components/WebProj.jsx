import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../res/portfolio.png"; 
import notesAppImg from "../res/notes.png";
import todoImg from  "../res/todo.png";

const webProjects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio showcasing my work and skills.",
    img: portfolioImg,
  },
  {
    title: "Notes Web App",
    description: "A minimalistic notes app with cloud sync.",
    img: notesAppImg,
  },
];

const backendProjects = [
  {
    title: "TodoList API",
    description: "A RESTful API for managing a to-do list.",
    img: todoImg, 
  },
];

function WebProj(){
  return (
    <section id = "web-projects" className="p-10 min-h-screen flex flex-col justify-center items-center bg-[#0A0F1A] text-white relative overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-6">Web & Backend Projects</h2>
      </motion.div>

      <div className="flex flex-col items-center space-y-10 w-full">
        {/* Web Projects */}
        <div  className="w-full">
          <h3 className="text-3xl font-semibold mb-6 text-center">Web Projects</h3>
          <div className="relative flex flex-wrap gap-10 justify-center">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#111827] p-4 w-56 rounded-xl shadow-lg backdrop-blur-md bg-opacity-50 cursor-grab active:cursor-grabbing"
                id ="backend-projects"
              >
                <img src={project.img} alt={project.title} className="w-40 h-40 object-cover rounded-md mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
                <p className="text-gray-400 text-sm text-center">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Projects */}
        <div className="w-full">
          <h3 className="text-3xl font-semibold mb-6 text-center">Backend Projects</h3>
          <div className="relative flex flex-wrap gap-10 justify-center">
            {backendProjects.map((project, index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#111827] p-4 w-56 rounded-xl shadow-lg backdrop-blur-md bg-opacity-50 cursor-grab active:cursor-grabbing"
              >
                {project.img ? (
                  <img src={project.img} alt={project.title} className="w-40 h-40 object-cover rounded-md mb-3 mx-auto" />
                ) : (
                  <div className="w-40 h-40 bg-gray-700 flex items-center justify-center rounded-md mb-3 mx-auto">
                    <span className="text-gray-400">API</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
                <p className="text-gray-400 text-sm text-center">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebProj;