import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.25em] mb-3">
            <span>// 04</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Career &amp; Practice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
        </motion.div>

        {/* Editorial Experience Showcase */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0d100e]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-2xl shadow-black/40 relative overflow-hidden group"
            >
              {/* Subtle Ambient Emerald Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/[0.08] transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 mb-6 border-b border-white/[0.08]">
                {/* Role and Company */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Engagement</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-base sm:text-lg">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{exp.company}</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono text-xs sm:text-sm self-start">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                  Key Responsibilities &amp; Impact:
                </h4>
                {exp.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
