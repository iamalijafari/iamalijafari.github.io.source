import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4" style={{height:72}}>
        <a href="#home" className="text-lg font-semibold text-white">Ali Jafari</a>
        <div className="hidden md:flex items-center gap-4 text-slate-200">
          <a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-800/60">About</a>
          <a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Education</a>
          <a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Experience</a>
          <a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Projects</a>
          <a href="#certificates" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Certificates</a>
          <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Contact</a>
          <a href="/assets/Ali_Jafari_Resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-slate-700">Resume</a>
        </div>
        <button className="md:hidden p-2 rounded-md text-slate-200" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden max-w-6xl mx-auto px-4 pb-4 flex flex-col gap-2 text-slate-200">
          <a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-800/60">About</a>
          <a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Education</a>
          <a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Experience</a>
          <a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Projects</a>
          <a href="#certificates" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Certificates</a>
          <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-800/60">Contact</a>
          <a href="/assets/Ali_Jafari_Resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-slate-700">Resume</a>
        </div>
      )}
    </nav>
  );
}
