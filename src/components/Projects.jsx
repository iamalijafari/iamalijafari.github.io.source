import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const shouldReduce = useReducedMotion();

  const inViewVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  const cardHover = shouldReduce ? {} : { scale: 1.015 };

  const projectCards = [
    {
      title: 'Microservices ERP Backend',
      desc: 'Design and implementation of microservices, message bus, API Gateway, and scalable data stores using .NET Core and Docker.',
      href: ''
    },
    {
      title: 'VFA Prediction with ML',
      desc: 'End-to-end ML pipeline in Python: preprocessing, feature engineering, modeling with scikit-learn, and evaluation.',
      href: ''
    },
    {
      title: 'Sarvak Hydraulics',
      desc: 'Windows Form application to calculate hydraulics properties for drilling fluids (VB.NET).',
      href: ''
    },
    {
      title: 'Heat Transfer Modeling',
      desc: 'Mathematical modeling of heat transfer during solid-state fermentation.',
      href: ''
    }
  ];

  return (
    <motion.section id="projects" className="py-12" variants={inViewVariant} initial={shouldReduce ? 'show' : 'hidden'} whileInView={shouldReduce ? 'show' : 'show'} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projectCards.map((p) => (
            <motion.div key={p.title} className="p-6 card-glass rounded-xl" whileHover={cardHover} transition={{ type: 'spring', stiffness: 300 }}>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
