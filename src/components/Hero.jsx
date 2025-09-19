import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-20">
        <motion.div variants={fadeUp} initial={shouldReduce ? 'show' : 'hidden'} animate="show" transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Ali Jafari</h1>
          <p className="text-slate-300 mt-4 max-w-xl">
            Back-End Developer · AI Enthusiast · MSc in Biotechnology
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/assets/Ali_Jafari_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-indigo-600 rounded-md font-medium shadow-lg">Resume</a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 border border-slate-700 rounded-md text-slate-200">Contact</a>
          </div>
        </motion.div>
        <motion.div className="flex justify-center" initial={shouldReduce ? 'show' : { opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="w-48 sm:w-64 md:w-72 h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden ring-1 ring-white/6 card-glass">
            <img src="/assets/profile.jpg" alt="Ali Jafari" className="w-full h-full object-cover"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
