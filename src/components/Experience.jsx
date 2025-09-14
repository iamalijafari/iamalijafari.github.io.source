import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section id="experience" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-white font-medium">Industry Experience</h3>
            <ul className="text-slate-300 mt-3 space-y-3 text-sm">
              <li><strong>Mid-Level .NET Back-End Web Developer</strong> — Chargoon (Mar 2023 – Present)</li>
              <li><strong>Junior .NET Back-End Web Developer</strong> — Chargoon (Sep 2021 – Mar 2023)</li>
              <li><strong>.NET Back-End Web Developer Internship</strong> — Chargoon (Jan 2021 – Aug 2021)</li>
              <li><strong>Windows Application Developer</strong> — Sarvak Drilling Services (Sep 2019 – Oct 2020)</li>
            </ul>
          </div>
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-white font-medium">Teaching & Research</h3>
            <ul className="text-slate-300 mt-3 space-y-3 text-sm">
              <li>Teaching Mathematics, Physics, and Chemistry to High School Students (Jun 2022 – Aug 2022)</li>
              <li>Teaching Assistant: Application of Mathematics in Chemical Engineering using MATLAB (2019)</li>
              <li>Teaching Assistant: Fluid Mechanics Modeling using ANSYS Fluent (2018-2019)</li>
              <li>Research & Projects: Heat transfer during solid-state fermentation, wastewater treatment modeling, thermodynamic modeling, recombinant insulin feasibility study.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
