import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Education() {
  const shouldReduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: shouldReduce ? 0 : 0.12 } },
  };

  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  const educations = [
    {
      degree: 'M.Sc. Biotechnology Engineering',
      institution: 'Amirkabir University of Technology',
      date: '2022-10 – 2024-05',
      scholarship: 'Full scholarship ',
      thesis: 'Modeling and prediction of pretreatment method on VFA production from lignocellulosic biomass by use of artificial intelligence',
      supervisor: 'Dr. Narges Fallah',
      cgpa: '16.18/20'
    },
    {
      degree: 'B.Sc. Chemical Engineering',
      institution: 'University of Tehran',
      date: '2016-09 – 2020-09',
      scholarship: 'Full scholarship ',
      thesis: 'Research and study of antiviral and antibacterial properties of chemical compounds of copper',
      supervisor: 'Dr. Abdolmajid Bayandori Moghaddam',
      cgpa: '16.04/20'
    }
  ];

  return (
    <motion.section id="education" className="py-12" variants={container} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {educations.map((e) => (
            <motion.div key={e.degree} className="p-6 card-glass rounded-xl" variants={item} whileHover={shouldReduce ? {} : { scale: 1.01 }}>
              <h3 className="text-white font-semibold">{e.degree}</h3>
              <div className="text-slate-300 text-sm mt-2">{e.institution} ({e.date})</div>
              {e.scholarship && <div className="text-slate-300 mt-3">Scholarship: {e.scholarship}</div>}
              {e.thesis && <div className="text-slate-300 mt-3">Thesis: {e.thesis}</div>}
              {e.supervisor && <div className="text-slate-300 mt-2">Supervisor: {e.supervisor}</div>}
              {e.cgpa && <div className="text-slate-300 mt-2">CGPA: {e.cgpa}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
