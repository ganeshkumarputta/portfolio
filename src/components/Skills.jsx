import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    category: "AI, ML & Data Analysis",
    skills: [
      "Machine Learning",
      "Exploratory Data Analysis (EDA)",
      "Power BI",
    ],
  },
  {
    category: "Software Engineering Fundamentals",
    skills: ["SDLC", "OOPS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Firebase", "Vercel", "Render"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-black/5 rounded-3xl p-6 h-fit shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
    >
      <div className="relative z-10">
        <h3 className="text-sm font-semibold text-black mb-4 tracking-tight">
          {category}
        </h3>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.button
              key={skill}
              whileHover={{ scale: 1.08 }}
              className="px-3 py-1.5 text-xs font-medium text-black bg-black/3 hover:bg-red-500/10 border border-black/5 hover:border-red-500/20 rounded-full transition-all duration-300 cursor-default select-none hover:text-red-500"
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-white py-16 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full">
              Technical Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Technologies I Work With
          </h2>

          <p className="text-sm text-black/60 font-normal">
            Software development skills across programming, AI, data analysis,
            and deployment tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {skillsData.map((item) => (
            <SkillCard
              key={item.category}
              category={item.category}
              skills={item.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;