import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section id="skills" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 card-glass rounded-lg">
            <div className="font-medium text-white">Programming & Frameworks</div>
            <ul className="text-slate-300 mt-2 text-sm space-y-1">
              <li>C#, .NET, ASP.NET Core</li>
              <li>Python, MATLAB</li>
              <li>VB.NET, VBA</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="p-4 card-glass rounded-lg">
            <div className="font-medium text-white">Data & Tools</div>
            <ul className="text-slate-300 mt-2 text-sm space-y-1">
              <li>T-SQL, SQL Server</li>
              <li>Docker, Git</li>
              <li>ANSYS, BioWin</li>
              <li>Minitab</li>
            </ul>
          </div>
          <div className="p-4 card-glass rounded-lg">
            <div className="font-medium text-white">Languages</div>
            <ul className="text-slate-300 mt-2 text-sm space-y-1">
              <li>Persian (Native)</li>
              <li>Turkish (Native)</li>
              <li>English (Professional) — IELTS upcoming</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
