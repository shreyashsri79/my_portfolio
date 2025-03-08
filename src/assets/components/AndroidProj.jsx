import React from "react";
import { motion } from "framer-motion";
import myApparel from '../res/my_apparel.png';
import weatheria from '../res/weatheria.jpg';
import qr_scanner from '../res/qr_scanner.webp';
import country_lookup from '../res/my_country_lookup.png';

const projects = [
  {
    title: "My Apparel",
    description: "A personal project for fashion enthusiasts.",
    img: myApparel, 
  },
  {
    title: "Weatheria",
    description: "Developed for internship at Pinnacle Labs.",
    img: weatheria,
  },
  {
    title: "QR Scanner",
    description: "Built for CSI and Ecell college club.",
    img: qr_scanner,
  },
  {
    title: "My Country Lookup",
    description: "An app for fetching country details in real time.",
    img: country_lookup,
  },
];

const AndroidProj = () => {
  return (
    <section id = "android-projects" className="p-10 min-h-screen flex flex-col justify-center items-center bg-[#0A0F1A] text-white relative overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-6">Android Projects</h2>
        <p className="text-lg text-gray-400">Some of my notable Android works</p>
      </motion.div>

      {/* Draggable Floating Project Cards */}
      <div className="relative flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 10, 0] }} // Floating effect
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="bg-[#111827] p-4 w-56 rounded-xl shadow-lg backdrop-blur-md bg-opacity-50 cursor-grab active:cursor-grabbing"
          >
            <img src={project.img} alt={project.title} className="w-40 h-40 object-cover rounded-md mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-center">{project.title}</h3>
            <p className="text-gray-400 text-sm text-center">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AndroidProj;
