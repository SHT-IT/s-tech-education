"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiKubernetes,
  SiNginx,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";

/* ---------------- TECH STACK (CLASSES ONLY) ---------------- */
const techStack = [
  // ===== PROGRAMMING & WEB =====
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", type: "Programming" },
  { name: "Python", icon: SiPython, color: "text-yellow-500", type: "Programming" },
  { name: "React", icon: FaReact, color: "text-cyan-500", type: "Programming" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black", type: "Programming" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600", type: "Programming" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-600", type: "Programming" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500", type: "Programming" },

  // ===== DEVOPS & CLOUD =====
  { name: "Linux", icon: FaLinux, color: "text-gray-700", type: "DevOps" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600", type: "DevOps" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500", type: "DevOps" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-indigo-500", type: "DevOps" },
  { name: "AWS Cloud", icon: FaAws, color: "text-orange-500", type: "DevOps" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-600", type: "DevOps" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-500", type: "DevOps" },
  { name: "Nginx", icon: SiNginx, color: "text-green-500", type: "DevOps" },

  // ===== DATABASES =====
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", type: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600", type: "Database" },
  { name: "Databases Basics", icon: FaDatabase, color: "text-gray-600", type: "Database" },
];

/* ---------------- ANIMATION ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.9 },
};

/* ---------------- COMPONENT ---------------- */
export default function TechCards() {
  const [filter, setFilter] = useState("All");

  const filteredTech =
    filter === "All"
      ? techStack
      : techStack.filter((item) => item.type === filter);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <h2 className="rs-shop-header text-3xl sm:text-4xl font-bold text-center mb-4 py-2">
          Technologies You Will Learn
        </h2>

        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Our curriculum is designed with <strong>industry-relevant tools</strong>,
          hands-on labs, and real-time DevOps projects to make you job-ready.
        </p>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["All", "Programming", "DevOps", "Database"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${
                filter === btn
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  layout
                  exit="exit"
                  className="group relative rounded-xl p-[1px]
                  hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-cyan-500/30"
                >
                  <div className="rounded-xl bg-white border border-gray-200
                  p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-4
                  shadow-sm sm:shadow-md transition">

                    {/* ICON */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 sm:w-14 sm:h-14
                      flex items-center justify-center
                      rounded-lg bg-gray-50"
                    >
                      <Icon className={`text-2xl sm:text-4xl ${tech.color}`} />
                    </motion.div>

                    {/* NAME */}
                    <span className="text-xs sm:text-sm font-semibold text-center">
                      {tech.name}
                    </span>

                    {/* BADGE */}
                    <span className="hidden sm:inline text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                      {tech.type}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
