import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hobbies() {
  const shouldReduce = useReducedMotion();

  const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: shouldReduce ? 0 : 0.06 } } };
  const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

  const hobbies = ['Gym & fitness', 'Poetry writing & reading', 'Mountaineering & outdoor exploration', 'Trading & financial markets', 'Programming & tech exploration', 'Book reading'];

  return (
    <motion.section id="hobbies" className="py-12 bg-slate-900/10" variants={container} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Hobbies</h2>
        <div className="mt-4 text-slate-300">
          <ul className="list-disc pl-5 space-y-2">
            {hobbies.map((h) => (
              <motion.li key={h} variants={item}>{h}</motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
