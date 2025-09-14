import React from "react";
import { motion } from "framer-motion";

export default function Hobbies() {
  return (
    <motion.section id="hobbies" className="py-12 bg-slate-900/10" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Hobbies</h2>
        <div className="mt-4 text-slate-300">
          <ul className="list-disc pl-5 space-y-2">
            <li>Gym</li>
            <li>Trading</li>
            <li>Poetry</li>
            <li>Mountaineering</li>
            <li>Book Reading</li>
            <li>Programming</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
