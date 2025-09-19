import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Skills() {
  const shouldReduce = useReducedMotion();

  const inViewVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section id="skills" className="py-12" variants={inViewVariant} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Programming & Development',
              items: ['C#.NET', 'ASP.NET', 'T-SQL', 'VB.NET', 'PHP', 'VBA', 'Python', 'MATLAB']
            },
            {
              title: 'Software & Tools',
              items: ['ANSYS', 'BioWin', 'CATIA', 'Minitab', 'EndNote', 'Mendeley', 'Linux', 'Microsoft Office Suite', 'Adobe Photoshop', 'Adobe Premiere']
            },
            {
              title: 'Languages',
              items: ['Persian (Native)', 'Turkish (Native)', 'English (Proficient; IELTS pending)']
            }
          ].map((s) => (
            <motion.div key={s.title} className="p-4 card-glass rounded-lg" whileHover={shouldReduce ? {} : { scale: 1.01 }}>
              <div className="font-semibold text-white">{s.title}</div>
              <ul className="text-slate-300 mt-2 text-sm space-y-1">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
