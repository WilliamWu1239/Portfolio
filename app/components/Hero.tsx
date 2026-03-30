"use client";

import { motion } from "framer-motion";
import { data } from "../data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          variants={item}
          className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-4"
        >
          {data.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-slate-400 mb-2"
        >
          Computer Science Graduate · {data.education.school}
        </motion.p>

        <motion.p
          variants={item}
          className="text-slate-500 mb-10 max-w-xl mx-auto"
        >
          I build full-stack web apps, ML models, and browser games. Passionate
          about clean code, thoughtful UI, and real-world impact.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href={`mailto:${data.email}`}
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 rounded-lg font-medium transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600 text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
