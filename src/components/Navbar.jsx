import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  const menuVariants = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.03 } },
  };

  const item = { hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4" style={{height:72}}>
        <a href="#home" className="text-lg font-semibold text-white">Ali Jafari</a>
        <div className="hidden md:flex items-center gap-4 text-slate-200">
          <motion.a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-800/60" initial={shouldReduce ? {} : 'hidden'} animate={shouldReduce ? {} : 'show'} variants={item}>About</motion.a>
          <motion.a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Experience</motion.a>
          <motion.a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Education</motion.a>
          <motion.a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Projects</motion.a>
          <motion.a href="#certificates" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Certificates</motion.a>
          <motion.a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Contact</motion.a>
          <motion.a href="/assets/Ali_Jafari_Resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-slate-700" variants={item}>Resume</motion.a>
        </div>
        <button className="md:hidden p-2 rounded-md text-slate-200" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5"/>
        </button>
      </div>
      {open && (
        <motion.div className="md:hidden max-w-6xl mx-auto px-4 pb-4 flex flex-col gap-2 text-slate-200" variants={menuVariants} initial={shouldReduce ? 'show' : 'hidden'} animate={shouldReduce ? 'show' : 'show'}>
          <motion.a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>About</motion.a>
          <motion.a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Education</motion.a>
          <motion.a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Experience</motion.a>
          <motion.a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Projects</motion.a>
          <motion.a href="#certificates" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Certificates</motion.a>
          <motion.a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-800/60" variants={item}>Contact</motion.a>
          <motion.a href="/assets/Ali_Jafari_Resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-slate-700" variants={item}>Resume</motion.a>
        </motion.div>
      )}
    </nav>
  );
}
