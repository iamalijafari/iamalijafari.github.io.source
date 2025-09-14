import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section id="education" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-white font-medium">MSc, Biotechnology</h3>
            <div className="text-slate-300 text-sm mt-2">Amirkabir University of Technology (2022-10 – 2024-05)</div>
            <div className="text-slate-300 mt-3">Thesis: Modeling and prediction of pretreatment method on VFA production from lignocellulosic biomass by use of artificial intelligence</div>
            <div className="text-slate-300 mt-2">Supervisor: Dr. Narges Fallah</div>
            <div className="text-slate-300 mt-2">CGPA: 16.18/20</div>
          </div>
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-white font-medium">BSc, Chemical Engineering</h3>
            <div className="text-slate-300 text-sm mt-2">University of Tehran (2016-09 – 2020-09)</div>
            <div className="text-slate-300 mt-3">Thesis: Research and study of antiviral and antibacterial properties of chemical compounds of copper</div>
            <div className="text-slate-300 mt-2">Supervisor: Dr. Abdolmajid Bayandori Moghaddam</div>
            <div className="text-slate-300 mt-2">CGPA: 16.04/20</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
