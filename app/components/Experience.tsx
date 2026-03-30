"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-slate-100 mb-12 text-center"
      >
        Experience &amp; Education
      </motion.h2>

      <div className="space-y-8">
        {/* Education */}
        <ExperienceCard
          title={data.education.school}
          subtitle={data.education.degree}
          tags={[]}
          bullets={[]}
          index={0}
        />

        {/* Work experience */}
        {data.experience.map((exp, i) => (
          <ExperienceCard
            key={exp.title}
            title={exp.title}
            subtitle=""
            tags={exp.tags}
            bullets={exp.bullets}
            index={i + 1}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  subtitle,
  tags,
  bullets,
  index,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 border-l border-slate-700"
    >
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500" />

      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      {subtitle && <p className="text-violet-400 text-sm mb-2">{subtitle}</p>}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400">
              <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
