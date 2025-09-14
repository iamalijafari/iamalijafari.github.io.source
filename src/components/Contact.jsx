import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section id="contact" className="py-12" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="text-slate-300 mt-4">Feel free to reach out for job opportunities or collaborations.</p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 items-center">
          <a href="mailto:ajsq337@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-md">
            <Mail className="w-5 h-5"/> ajsq337@gmail.com
          </a>
          <a href="tel:+989338099321" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-md">
            <Phone className="w-5 h-5"/> +98 933 809 9321
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://linkedin.com/in/ali-jafari-545261185" target="_blank" rel="noreferrer" className="text-slate-300">
            <Linkedin className="w-6 h-6"/>
          </a>
          <a href="https://github.com/iamalijafari" target="_blank" rel="noreferrer" className="text-slate-300">
            <Github className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
