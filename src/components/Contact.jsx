import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const shouldReduce = useReducedMotion();

  const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: shouldReduce ? 0 : 0.08 } } };
  const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.section id="contact" className="py-12" variants={container} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 className="text-2xl font-semibold text-white" variants={item}>Contact</motion.h2>
        <motion.p className="text-slate-300 mt-4" variants={item}>Feel free to reach out for job opportunities or collaborations.</motion.p>
        <motion.div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 items-center" variants={item}>
          <motion.a href="mailto:ajsq337@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-md" variants={item} whileHover={shouldReduce ? {} : { scale: 1.02 }}>
            <Mail className="w-5 h-5"/> ajsq337@gmail.com
          </motion.a>
          <motion.a href="tel:+989338099321" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-md" variants={item} whileHover={shouldReduce ? {} : { scale: 1.02 }}>
            <Phone className="w-5 h-5"/> +98 933 809 9321
          </motion.a>
        </motion.div>
        <motion.div className="mt-6 flex justify-center gap-6" variants={item}>
          <motion.a href="https://linkedin.com/in/ali-jafari-545261185" target="_blank" rel="noreferrer" className="text-slate-300" whileHover={shouldReduce ? {} : { scale: 1.05 }}>
            <Linkedin className="w-6 h-6"/>
          </motion.a>
          <motion.a href="https://github.com/iamalijafari" target="_blank" rel="noreferrer" className="text-slate-300" whileHover={shouldReduce ? {} : { scale: 1.05 }}>
            <Github className="w-6 h-6"/>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
