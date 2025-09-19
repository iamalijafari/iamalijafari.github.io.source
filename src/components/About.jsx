import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const shouldReduce = useReducedMotion();

  const inViewVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section id="about" className="py-12" variants={inViewVariant} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">About Me</h2>
        <p className="text-slate-300 mt-4 leading-relaxed">
          I am Ali Jafari, a passionate back-end developer and biotechnology researcher with a strong foundation in both engineering and computer science. With a background in Chemical Engineering (BSc) and Biotechnology Engineering (MSc), I specialize in applying artificial intelligence and machine learning to solve complex problems in bioinformatics and microbial products research.
          <br />
          Alongside my academic journey, I have over four years of professional experience as a .NET Back-End Developer at Chargoon, where I’ve gained expertise in C#, ASP.NET, T-SQL, and clean code practices. I thrive at the intersection of technology and science, blending analytical thinking with creativity to design innovative solutions.
        </p>
      </div>
    </motion.section>
  );
}