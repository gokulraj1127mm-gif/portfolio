import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Lightbulb, RefreshCw, Clock, Brain, Code2, Terminal, Cpu } from 'lucide-react';
import { skillsData } from '../data/mockData';

const getIcon = (iconName) => {
  const icons = {
    MessageSquare,
    Users,
    Lightbulb,
    RefreshCw,
    Clock,
    Brain
  };
  return icons[iconName] || MessageSquare;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-36 relative border-t border-white/[0.06]">
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
            <span>// 02</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Core Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            A combination of technical expertise and soft skills that enable me to deliver quality work
          </p>
        </motion.div>

        {/* Two-Column Grid: Technical Skills & Soft Skills */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Technical Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">Technical Skills</h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {skillsData.technical.length} Technologies
              </span>
            </div>

            {/* Refined Technical Skill Cards (no invented percentages or distracting bars) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-4 rounded-xl bg-[#0d100e]/80 border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#0f1411] transition-all duration-300 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <span className="text-slate-200 font-semibold text-sm group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">Soft Skills</h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {skillsData.soft.length} Attributes
              </span>
            </div>

            {/* Soft Skills Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {skillsData.soft.map((skill, index) => {
                const IconComponent = getIcon(skill.icon);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="p-4 rounded-xl bg-[#0d100e]/80 border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#0f1411] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                      <IconComponent className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-slate-200 font-medium text-sm block group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
