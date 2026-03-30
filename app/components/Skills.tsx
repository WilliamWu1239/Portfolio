"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";

const groups = [
  { label: "Languages", items: data.skills.languages },
  { label: "Frameworks & Libraries", items: data.skills.frameworks },
  { label: "Tools", items: data.skills.tools },
  { label: "Core Strengths", items: data.skills.strengths },
];

function Tag({ children, delay }: { children: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35, delay }}
      className="px-3 py-1.5 text-sm rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-violet-500 hover:text-violet-300 transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-slate-100 mb-12 text-center"
      >
        Technical Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <Tag key={item} delay={i * 0.05}>
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
