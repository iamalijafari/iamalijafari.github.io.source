import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const shouldReduce = useReducedMotion();

  const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: shouldReduce ? 0 : 0.08 } } };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  const experiences = [
    {
      title: 'Industry Experience',
      bullets: [
        '<strong>Mid-Level .NET Back-End Developer</strong> — Chargoon (Mar 2023 – Present)',
        '<strong>Junior .NET Back-End Developer</strong> — Chargoon (Sep 2021 – Mar 2023)',
        '<strong>Internship, .NET Development</strong> — Chargoon (Jan 2021 – Aug 2021)',
        '<strong>Windows Application Developer</strong> — Sarvak Drilling Services (Sep 2019 – Oct 2020)',
        '<strong>Chemical Engineering Internship</strong> — Sarvak Drilling Services (June 2019 - Aug 2019)'
      ]
    },
    {
      title: 'Teaching Experience',
      bullets: [
        'Mathematics, Physics, Chemistry Tutor (Jun 2022 – Aug 2022)',
        'Teaching Assistant – Application of Mathematics in Chemical Engineering (MATLAB) – UT (2019)',
        'Teaching Assistant – Fluid Mechanics Modeling (ANSYS Fluent) – UT (2018-2019)',
        'Teaching Assistant – Industrial Drawing (CATIA) – UT (2017)'
      ]
    }
  ];

  return (
    <motion.section id="experience" className="py-12" variants={container} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <motion.div key={exp.title} className="p-6 card-glass rounded-xl" variants={item} whileHover={shouldReduce ? {} : { scale: 1.01 }}>
              <h3 className="text-white font-semibold">{exp.title}</h3>
              <ul className="text-slate-300 mt-3 space-y-3 text-sm">
                {exp.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
