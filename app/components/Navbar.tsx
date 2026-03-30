"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > lastY && y > 80);
    setLastY(y);
  });

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 bg-[#0a0a0f]/80 backdrop-blur border-b border-slate-800"
      >
        <span className="text-slate-100 font-semibold tracking-tight">WW</span>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-slate-400">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-slate-100 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setResumeOpen(true)}
            className="text-sm px-4 py-1.5 rounded-md border border-violet-500/60 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 transition-colors duration-200"
          >
            Resume
          </button>
        </div>
      </motion.nav>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
