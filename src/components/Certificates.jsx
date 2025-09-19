import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Certificates() {
  const shouldReduce = useReducedMotion();

  const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: shouldReduce ? 0 : 0.08 } } };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  const certs = [
    { title: 'CS50AI — Harvard University', date: 'Dec 2023', href: 'https://cs50.harvard.edu/certificates/cad015f6-1464-4aeb-9a64-0be7fbba699a' },
    { title: 'CS50P — Harvard University', date: 'Oct 2023', href: 'https://cs50.harvard.edu/certificates/cb3abd94-1eca-4fac-b29b-9dd65c92dbf3' },
    { title: 'CS50x 2023 — Harvard University', date: 'Sep 2023', href: 'https://cs50.harvard.edu/certificates/13d354da-b167-4c51-82f6-c7db441e2dc3' },
    { title: 'Machine Learning with Python Workshop', date: '2022-07-13' },
    { title: 'Heat Exchanger Design Workshop – UT', date: '2022-02' },
    { title: 'Nanotechnology Seminar – Shahid Chamran Research Center', date: '2017' }
  ];

  return (
    <motion.section id="certificates" className="py-12 bg-slate-900/10" variants={container} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Certificates & Workshops</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <motion.a key={c.title} href={c.href || '#'} target="_blank" rel="noreferrer" className="p-4 card-glass rounded-lg" variants={item} whileHover={shouldReduce ? {} : { scale: 1.02 }}>
              <div className="font-semibold text-white">{c.title}</div>
              <div className="text-slate-300 text-sm mt-1">{c.date}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
