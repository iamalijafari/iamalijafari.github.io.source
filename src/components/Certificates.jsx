import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <motion.section id="certificates" className="py-12 bg-slate-900/10" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Certificates & Workshops</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <a href="https://cs50.harvard.edu/certificates/cad015f6-1464-4aeb-9a64-0be7fbba699a" target="_blank" rel="noreferrer" className="p-4 card-glass rounded-lg">
            <div className="font-semibold text-white">CS50AI — Harvard University</div>
            <div className="text-slate-300 text-sm mt-1">Dec 2023</div>
          </a>
          <a href="https://cs50.harvard.edu/certificates/cb3abd94-1eca-4fac-b29b-9dd65c92dbf3" target="_blank" rel="noreferrer" className="p-4 card-glass rounded-lg">
            <div className="font-semibold text-white">CS50P — Harvard University</div>
            <div className="text-slate-300 text-sm mt-1">Oct 2023</div>
          </a>
          <a href="https://cs50.harvard.edu/certificates/13d354da-b167-4c51-82f6-c7db441e2dc3" target="_blank" rel="noreferrer" className="p-4 card-glass rounded-lg">
            <div className="font-semibold text-white">CS50x 2023 — Harvard University</div>
            <div className="text-slate-300 text-sm mt-1">Sep 2023</div>
          </a>
          <div className="p-4 card-glass rounded-lg">
            <div className="font-semibold text-white">Machine Learning with Python Workshop</div>
            <div className="text-slate-300 text-sm mt-1">Amirkabir University of Technology — 2022-07-13</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
