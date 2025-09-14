import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section id="projects" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 card-glass rounded-xl hover:scale-[1.01] transition-transform">
            <h3 className="text-white font-semibold">Microservices ERP Backend</h3>
            <p className="text-slate-300 mt-2">Design and implementation of microservices, message bus, API Gateway, and scalable data stores using .NET Core and Docker.</p>
          </div>
          <div className="p-6 card-glass rounded-xl hover:scale-[1.01] transition-transform">
            <h3 className="text-white font-semibold">VFA Prediction with ML</h3>
            <p className="text-slate-300 mt-2">End-to-end ML pipeline in Python: preprocessing, feature engineering, modeling with scikit-learn, and evaluation.</p>
          </div>
          <div className="p-6 card-glass rounded-xl hover:scale-[1.01] transition-transform">
            <h3 className="text-white font-semibold">Sarvak Hydraulics</h3>
            <p className="text-slate-300 mt-2">Windows Form application to calculate hydraulics properties for drilling fluids (VB.NET).</p>
          </div>
          <div className="p-6 card-glass rounded-xl hover:scale-[1.01] transition-transform">
            <h3 className="text-white font-semibold">Heat Transfer Modeling</h3>
            <p className="text-slate-300 mt-2">Mathematical modeling of heat transfer during solid-state fermentation.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
