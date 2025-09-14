import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">About Me</h2>
        <p className="text-slate-300 mt-4 leading-relaxed">
          I am a back-end developer with 4+ years of professional experience at Chargoon. I combine backend engineering with applied machine learning and bioinformatics. My MSc thesis focused on modeling and prediction of pretreatment method on VFA production from lignocellulosic biomass using AI.
        </p>
      </div>
    </motion.section>
  );
}
